// Dashboard Component
import React, { useState } from "react";
import Qoute from "../../components/qoute";
import { useDispatch, useSelector } from "react-redux";
import QouteModal from "../../components/qoute/qouteModal";
import ReactModal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserResetCurrentUser } from "../../actions/currentUserActions";
import TagModal from "../../components/tags/tagModal";
import MyNavBar from "../../components/navbar";
import "./dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tagModalIsOpen, setTagModalIsOpen] = useState(false);
  const qoutes = useSelector((state) => state.qoutes.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  ReactModal.setAppElement("#root");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSignout = () => {
    dispatch(CurrentUserResetCurrentUser());
    navigate("/");
  };

  const tagOpenModal = () => {
    setTagModalIsOpen(true);
  };

  const closeTagModal = () => {
    setTagModalIsOpen(false);
  };

  return (
    <>
      <MyNavBar />
      <div id="dashboard-container">
        {qoutes.map((qoute) => {
          return <Qoute key={qoute.id} qouteId={qoute.id} />;
        })}
        <ReactModal
          isOpen={tagModalIsOpen}
          onRequestClose={closeTagModal}
          className="react-modal-content"
        >
          <TagModal closeModal={closeTagModal} />
        </ReactModal>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="react-modal-content"
        >
          <QouteModal closeModal={closeModal} />
        </ReactModal>
      </div>
      <button className="dashboard-button" onClick={openModal}>
        Create new qoute
      </button>
      <button id="signout-button" onClick={handleSignout}>
        Sign out
      </button>
      <button className="dashboard-button" onClick={tagOpenModal}>
        Create tag
      </button>
    </>
  );
};
export default Dashboard;
