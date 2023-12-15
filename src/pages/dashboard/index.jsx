import React, { useState } from "react";
import Qoute from "../../components/qoute";
import { useDispatch, useSelector } from "react-redux";
import QouteModal from "../../components/qoute/qouteModal";
import ReactModal from "react-modal";
import { setCurrentUser } from "../../actions/currentUserActions";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const qoutes = useSelector((state) => state.qoutes.qoutes);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSignout = () => {
    dispatch(setCurrentUser());
    navigate("/");
  };
  return (
    <div>
      {qoutes?.map((qoute) => {
        return <Qoute key={qoute.id} qoute_id={qoute.id} />;
      })}
      <button onClick={openModal}>Create new qoute</button>
      <button onClick={handleSignout}>sign out</button>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <QouteModal closeModal={closeModal} />
      </ReactModal>
    </div>
  );
};
export default Dashboard;
