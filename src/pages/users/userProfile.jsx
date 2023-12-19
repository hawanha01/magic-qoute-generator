import { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import EditProfileModal from "../../components/users/editProfileModal";

const UserProfile = () => {
  const userId = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const users = useSelector((state) => state.users.data);
  const user = users.find((user) => user.id === parseInt(userId.userId));
  ReactModal.setAppElement("#root");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>
        Image: <img src={user.profile_picture} alt="img" />
      </p>
      <button onClick={openModal}>Edit profile</button>
      <Link to="/dashboard">Back to dashboard</Link>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <EditProfileModal closeModal={closeModal} currentUser={user} />
      </ReactModal>
    </div>
  );
};

export default UserProfile;
