import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActionFollowUser } from "../../actions/userActions";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import UserReportModal from "../../components/report/userReportModal";
import Report from "../../components/report";

const AllUsers = () => {
  const allUsers = useSelector((state) => state.users.data);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const current_user = useSelector((state) => state.current_user.data);
  const users = allUsers.filter((user) => user.id !== current_user.id);
  const dispatch = useDispatch();
  const handleFollow = (userId) => {
    dispatch(userActionFollowUser({ userId, current_user: current_user }));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  ReactModal.setAppElement("#root");
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <span>
              {user.reportIds.map((reportId) => (
                <Report key={`${reportId}-${user.id}`} reportId={reportId} />
              ))}
              <button onClick={() => handleFollow(user.id)}>follow user</button>
              <button onClick={openModal}>report</button>
            </span>
            <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
              <UserReportModal closeModal={closeModal} userId={user.id} />
            </ReactModal>
          </li>
        ))}
      </ul>
      <Link to="/dashboard">back to Dashboard</Link>
    </div>
  );
};

export default AllUsers;
