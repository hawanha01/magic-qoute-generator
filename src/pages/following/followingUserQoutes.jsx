import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Qoute from "../../components/qoute";

const FollowingUserQoutes = () => {
  const userId = useParams();
  const users = useSelector((state) => state.users.data);
  const qoutes = useSelector((state) => state.qoutes.data);
  const tags = useSelector((state) => state.tags.data);
  const currentUser = useSelector((state) => state.currentUser.data);
  const user = users.find((user) => user.id === parseInt(userId.userId));
  return (
    <div>
      <ul>
        {user.followingIds.map((followingId) => {
          const followingQoutes = qoutes.filter(
            (qoute) => qoute.userId === followingId
          );
          return followingQoutes.map((followingQoute) => (
            <li key={`${followingId}-${followingQoute.id}`}>
              <Qoute
                qoute={followingQoute}
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
export default FollowingUserQoutes;
