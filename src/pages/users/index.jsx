// AllUsers.jsx

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActionFollowUser } from "../../actions/userActions";
import ReactModal from "react-modal";
import UserReportModal from "../../components/report/userReportModal";
import "./AllUsers.css";

const AllUsers = () => {
  const allUsers = useSelector((state) => state.users.data);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const currentUser = useSelector((state) => state.currentUser.data);
  const users = allUsers.filter((user) => user.id !== currentUser.id);
  const dispatch = useDispatch();

  const handleFollow = (userId) => {
    dispatch(userActionFollowUser({ userId, currentUser: currentUser }));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  ReactModal.setAppElement("#root");

  return (
    <div className="all-users-container">
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-list-item">
            <span className="user-name">{user.name}</span>
            <span className="user-buttons">
              <button
                className="follow-button"
                onClick={() => handleFollow(user.id)}
              >
                Follow User
              </button>
              <button className="report-button" onClick={openModal}>
                Report
              </button>
            </span>
            <ReactModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className="react-modal-content"
            >
              <UserReportModal closeModal={closeModal} userId={user.id} />
            </ReactModal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
