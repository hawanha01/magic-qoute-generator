import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userActionUnfollowUser } from "../../actions/userActions";

const FollowingUser = () => {
  const userId = useParams();
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();
  const user = users.find((user) => user.id === parseInt(userId.userId));
  const handleUnfollow = (following_id) => {
    dispatch(
      userActionUnfollowUser({ userId: parseInt(userId.userId), following_id })
    );
  };
  return (
    <div>
      <ul>
        {user.following_ids.map((following_id) => (
          <li key={following_id}>
            {users.find((user) => user.id === following_id).name}
            <span>
              <button onClick={() => handleUnfollow(following_id)}>
                unfollow
              </button>
            </span>
          </li>
        ))}
      </ul>
      <Link to="/dashboard">back to Dashboard</Link>
    </div>
  );
};

export default FollowingUser;
