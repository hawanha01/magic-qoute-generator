import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Followers.css";

const Followers = () => {
  const userId = useParams();
  const users = useSelector((state) => state.users.data);
  const currentUser = users.find((user) => user.id === parseInt(userId.userId));
  const uniqueFollowerIds = new Set();
  const followerUsers = users
    .filter((user) => user.followingIds.includes(currentUser.id))
    .filter((follower) => {
      if (!uniqueFollowerIds.has(follower.id)) {
        uniqueFollowerIds.add(follower.id);
        return true;
      }
      return false;
    });

  return (
    <div className="followers-container">
      <table className="followers-table">
        <thead>
          <tr>
            <th>Followers</th>
          </tr>
        </thead>
        <tbody>
          {followerUsers.map((follower) => (
            <tr key={follower.id}>
              <td>{follower.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Followers;
