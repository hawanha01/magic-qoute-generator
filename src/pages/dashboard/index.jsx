import React, { useState } from "react";
import Qoute from "../../components/qoute";
import { useSelector } from "react-redux";
import QouteModal from "../../components/qoute/qouteModal";
import Modal from "react-modal";

const Dashboard = () => {
  const qoutes = useSelector((state) => state.qoutes.qoutes);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      {console.log("qoutes", qoutes)}
      {qoutes?.map((qoute) => {
        return <Qoute key={qoute.id} qoute_id={qoute.id} />;
      })}
      <button onClick={openModal}>Create new qoute</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <QouteModal closeModal={closeModal} />
      </Modal>
    </div>
  );
};
export default Dashboard;
