import React, { useState } from "react";
import Qoute from "../../components/qoute";
import { useSelector } from "react-redux";
import QouteModal from "../../components/qoute/qouteModal";
import ReactModal from "react-modal";
import TagModal from "../../components/tags/tagModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faQuoteLeft, faTag } from "@fortawesome/free-solid-svg-icons";
import "./Styles.css";

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tagModalIsOpen, setTagModalIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const qoutes = useSelector((state) => state.qoutes.data);
  ReactModal.setAppElement("#root");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const tagOpenModal = () => {
    setTagModalIsOpen(true);
  };

  const closeTagModal = () => {
    setTagModalIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard-container">
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
      <div className="dashboard-dropdown">
        <button onClick={toggleDropdown} className="dashboard-button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <div onClick={() => openModal()}>
              <FontAwesomeIcon icon={faQuoteLeft} />
              <span>Create Qoute</span>
            </div>
            <div onClick={() => tagOpenModal()}>
              <FontAwesomeIcon icon={faTag} />
              <span>Create Tag</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Dashboard;
