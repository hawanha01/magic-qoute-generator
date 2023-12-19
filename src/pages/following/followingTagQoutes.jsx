import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Qoute from "../../components/qoute";

const FollowingTagQoutes = () => {
  const userId = useParams();
  const users = useSelector((state) => state.users.data);
  const qoutes = useSelector((state) => state.qoutes.data);
  const user = users.find((user) => user.id === parseInt(userId.userId));
  const uniqueQuoteIds = new Set();

  return (
    <div>
      <ul>
        {user.tagIds.map((tagId) => {
          const followingQoutes = qoutes.filter((qoute) =>
            qoute.tagIds.includes(tagId)
          );

          const uniqueFollowingQuoteIds = followingQoutes
            .map((followingQoute) => followingQoute.id)
            .filter((quoteId) => !uniqueQuoteIds.has(quoteId));

          uniqueFollowingQuoteIds.forEach((quoteId) => {
            uniqueQuoteIds.add(quoteId);
          });

          return uniqueFollowingQuoteIds.map((uniqueQuoteId) => (
            <li key={`${tagId}-${uniqueQuoteId}`}>
              <Qoute qouteId={uniqueQuoteId} />
            </li>
          ));
        })}
      </ul>
      <Link to="/dashboard">Back to dashboard</Link>
    </div>
  );
};

export default FollowingTagQoutes;
