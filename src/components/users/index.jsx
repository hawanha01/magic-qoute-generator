import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActionFollowUser } from "../../actions/userActions";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const allUsers = useSelector((state) => state.users.data);
  const current_user = useSelector((state) => state.current_user.data);
  const users = allUsers.filter((user) => user.id !== current_user.id);
  const dispatch = useDispatch();
  const handleFollow = (userId) => {
    dispatch(userActionFollowUser({ userId, current_user: current_user }));
  };
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <span>
              <button onClick={() => handleFollow(user.id)}>follow user</button>
            </span>
          </li>
        ))}
      </ul>
      <Link to="/dashboard">back to Dashboard</Link>
    </div>
  );
};

export default AllUsers;
