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
        {user.tag_ids.map((tagId) => {
          const following_qoutes = qoutes.filter((qoute) =>
            qoute.tag_ids.includes(tagId)
          );

          const uniqueFollowingQuoteIds = following_qoutes
            .map((following_qoute) => following_qoute.id)
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
