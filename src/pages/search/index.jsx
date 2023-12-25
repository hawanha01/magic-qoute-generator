import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [sortedQoutes, setSortedQoutes] = useState([]);
  const tags = useSelector((state) => state.tags.data);
  const qoutes = useSelector((state) => state.qoutes.data);
  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    const filteredQoutes = qoutes.filter((qoute) => {
      const authorMatch =
        qoute.userId &&
        users
          .find((user) => user.id === qoute.userId)
          .name.toLowerCase()
          .includes(searchQuery.toLowerCase());

      const qouteMatch = qoute.body
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const tagMatch =
        Array.isArray(qoute.tagIds) &&
        qoute.tagIds.some((tagId) => {
          const tag = tags.find((tag) => tag.id === tagId);
          return (
            tag && tag.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        });

      return authorMatch || qouteMatch || tagMatch;
    });

    const compareFunction = (a, b) => {
      switch (sortBy) {
        case "date":
          return (
            new Date(b.date + " " + b.time) - new Date(a.date + " " + a.time)
          );
        case "likes":
          return b.likeIds.length - a.likeIds.length;
        case "dislikes":
          return b.dislikeIds.length - a.dislikeIds.length;
        case "comments":
          return b.commentIds.length - a.commentIds.length;
        default:
          return 0;
      }
    };
    const sortedQoutes = [...filteredQoutes].sort(compareFunction);
    setSortedQoutes(sortedQoutes);
  }, [searchQuery, sortBy, qoutes, tags, users]);
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by author, qoute, or tag"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Sort by Date</option>
          <option value="likes">Sort by Likes</option>
          <option value="dislikes">Sort by Dislikes</option>
          <option value="comments">Sort by Comments</option>
        </select>
      </div>
      <ul>
        {sortedQoutes.map((qoute) => (
          <li key={qoute.id}>
            <p>{qoute.body}</p>
            <p>
              Author:{" "}
              {qoute.userId
                ? `${users.find((user) => user.id === qoute.userId).name}`
                : "Unknown"}
            </p>
            <p>Date: {qoute.date}</p>
            <p>Likes: {qoute.likeIds.length}</p>
            <p>Dislikes: {qoute.dislikeIds.length}</p>
            <p>Comments: {qoute.commentIds.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
