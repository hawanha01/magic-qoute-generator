import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const UserFollowers = () => {
  const userId = useParams();
  const users = useSelector((state) => state.users.data);
  const currentUser = users.find((user) => user.id === parseInt(userId.userId));
  const uniqueFollowerIds = new Set();
  const followerUsers = users
    .filter((user) => user.following_ids.includes(currentUser.id))
    .filter((follower) => {
      if (!uniqueFollowerIds.has(follower.id)) {
        uniqueFollowerIds.add(follower.id);
        return true;
      }
      return false;
    });

  return (
    <div>
      <ul>
        {/* {users.map(user=>user.following_ids.find(following_id => following_id === currentUser.id))}
         */}
        {followerUsers.map((follower) => (
          <li key={follower.id}>{follower.name}</li>
        ))}
      </ul>
      <Link to="/dashboard">Back to dashboard</Link>
    </div>
  );
};

export default UserFollowers;