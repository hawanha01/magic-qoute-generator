import { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditProfileModal from "../../components/users/editProfileModal";
import "./styles.css";
import profile_picture from '../../assets/profile_picture/profile_picture.jpg'

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
    <div className="user-profile-container">
      <div className="user-details">
        <img src={profile_picture} alt="User" className="user-profile-image" />
        <p className="user-name">{user.name}</p>
        <p className="user-email">Email: {user.email}</p>
      </div>
      <div className="user-actions">
        <button onClick={openModal}>Edit Profile</button>
      </div>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} >
        <EditProfileModal closeModal={closeModal} currentUser={user} />
      </ReactModal>
    </div>
  );
};

export default UserProfile;
