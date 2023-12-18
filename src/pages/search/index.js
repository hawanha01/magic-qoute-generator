import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
        qoute.user_id &&
        (users
          .find((user) => user.id === qoute.user_id)
          .first_name.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
          users
            .find((user) => user.id === qoute.user_id)
            .last_name.toLowerCase()
            .includes(searchQuery.toLowerCase()));

      const qouteMatch = qoute.body
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const tagMatch =
        Array.isArray(qoute.tag_ids) &&
        qoute.tag_ids.some((tagId) => {
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
          return b.like_ids.length - a.like_ids.length;
        case "dislikes":
          return b.dislike_ids.length - a.dislike_ids.length;
        case "comments":
          return b.comment_ids.length - a.comment_ids.length;
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
              {qoute.user_id
                ? `${users.find(user=>user.id === qoute.user_id).name}`
                : "Unknown"}
            </p>
            <p>Date: {qoute.date}</p>
            <p>Likes: {qoute.like_ids.length}</p>
            <p>Dislikes: {qoute.dislike_ids.length}</p>
            <p>Comments: {qoute.comment_ids.length}</p>
          </li>
        ))}
      </ul>
      <Link to="/dashboard">back to dashboard</Link>
    </div>
  );
};

export default Search;
