import React, { useState } from "react";
import Qoute from "../../components/qoute";
import { useDispatch, useSelector } from "react-redux";
import QouteModal from "../../components/qoute/qouteModal";
import ReactModal from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { CurrentUserResetCurrentUser } from "../../actions/currentUserActions";
import TagModal from "../../components/tags/tagModal";

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [tagModalIsOpen, setTagModalIsOpen] = useState(false);
  const qoutes = useSelector((state) => state.qoutes.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const current_user = useSelector((state) => state.current_user.data);

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
      {current_user ? (
        <div>
          {qoutes.map((qoute) => {
            return <Qoute key={qoute.id} qouteId={qoute.id} />;
          })}
          <Link to="/users">all users</Link>
          <Link to={`/user/${current_user.id}/followings`}>
            following users
          </Link>
          <Link to="/tags">all tags</Link>
          <Link to={`/user/${current_user.id}/tags`}>following tags</Link>
          <Link to={`/user/${current_user.id}/followings/qoutes`}>
            posts of following users
          </Link>
          <Link to={`/user/${current_user.id}/tags/qoutes`}>
            posts of following tags
          </Link>
          <ReactModal isOpen={tagModalIsOpen} onRequestClose={closeTagModal}>
            <TagModal closeModal={closeTagModal} />
          </ReactModal>
          <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <QouteModal closeModal={closeModal} />
          </ReactModal>
        </div>
      ) : null}
      <button onClick={openModal}>Create new qoute</button>
      <button onClick={handleSignout}>sign out</button>
      <button onClick={tagOpenModal}>create tag</button>
    </>
  );
};
export default Dashboard;
