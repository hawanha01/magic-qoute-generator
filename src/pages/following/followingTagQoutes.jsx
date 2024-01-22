import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Qoute from "../../components/qoute";

const FollowingTagQoutes = () => {
  const userId = useParams();
  const users = useSelector((state) => state.users.data);
  const qoutes = useSelector((state) => state.qoutes.data);
  const tags = useSelector((state) => state.tags.data);
  const currentUser = useSelector((state) => state.currentUser.data);
  const user = users.find((user) => user.id === parseInt(userId.userId));
  const uniqueQuote = new Set();

  return (
    <div>
      <ul>
        {user.tagIds.map((tagId) => {
          const followingQoutes = qoutes.filter((qoute) =>
            qoute.tagIds.includes(tagId)
          );

          const uniqueFollowingQuote = followingQoutes.filter(
            (quote) => !uniqueQuote.has(quote)
          );

          uniqueFollowingQuote.forEach((quote) => {
            uniqueQuote.add(quote);
          });

          return uniqueFollowingQuote.map((uniqueQuote) => (
            <li key={`${tagId}-${uniqueQuote.id}`}>
              <Qoute
                qoute={uniqueQuote}
                tags={tags}
                user={user}
                currentUser={currentUser}
              />
            </li>
          ));
        })}
      </ul>
    </div>
  );
};

export default FollowingTagQoutes;
