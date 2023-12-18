import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Qoute from "../qoute";

const FollowingUserQoutes = () => {
  const userId = useParams();
  const users = useSelector((state) => state.users.data);
  const qoutes = useSelector((state) => state.qoutes.data);
  const user = users.find((user) => user.id === parseInt(userId.userId));
  return (
    <div>
      <ul>
        {user.following_ids.map((following_id) => {
          const following_qoutes = qoutes.filter(
            (qoute) => qoute.user_id === following_id
          );
          return following_qoutes.map((following_qoute) => (
            <li key={`${following_id}-${following_qoute.id}`}>
              <Qoute qouteId={following_qoute.id} />
            </li>
          ));
        })}
      </ul>
      <Link to="/dashboard">back to dashboard</Link>
    </div>
  );
};
export default FollowingUserQoutes;
