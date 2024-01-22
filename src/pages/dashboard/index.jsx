import React from "react";
import Qoute from "../../components/qoute";
import { useSelector } from "react-redux";
import QouteModal from "../../components/qoute/qouteModal";
import ReactModal from "react-modal";
import TagModal from "../../components/tags/tagModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faQuoteLeft,
  faTag,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Styles.css";

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [tagModalIsOpen, setTagModalIsOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [sortBy, setSortBy] = React.useState("date");
  const [sortedQoutes, setSortedQoutes] = React.useState([]);

  const tags = useSelector((state) => state.tags.data);
  const qoutes = useSelector((state) => state.qoutes.data);
  const users = useSelector((state) => state.users.data);
  const currentUser = useSelector((state) => state.currentUser.data);
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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  React.useEffect(() => {
    const filteredQoutes = qoutes.filter((qoute) => {
      const authorMatch =
        qoute.userId &&
        users
          .find((user) => user.id === qoute.userId)
          .name.toLowerCase()
          .includes(searchQuery.toLowerCase());

      const qouteMatch = qoute.body
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const tagMatch =
        Array.isArray(qoute.tagIds) &&
        qoute.tagIds.some((tagId) => {
          const tag = tags.find((tag) => tag.id === tagId);
          return (
            tag && tag.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        });

      return authorMatch || qouteMatch || tagMatch;
    });

    const compareFunction = (a, b) => {
      switch (sortBy) {
        case "date":
          return (
            new Date(b.date + " " + b.time) - new Date(a.date + " " + a.time)
          );
        case "likes":
          return b.likeIds.length - a.likeIds.length;
        case "dislikes":
          return b.dislikeIds.length - a.dislikeIds.length;
        case "comments":
          return b.commentIds.length - a.commentIds.length;
        default:
          return 0;
      }
    };
    const sortedQoutes = [...filteredQoutes].sort(compareFunction);
    setSortedQoutes(sortedQoutes);
  }, [searchQuery, sortBy, qoutes, tags, users]);

  const renderSearchedQoutes = () =>
    sortedQoutes.map((qoute) => (
      <Qoute
        key={qoute.id}
        qoute={qoute}
        user={users.find((user) => user.id === qoute.userId)}
        currentUser={currentUser}
        tags={tags}
      />
    ));

  const renderAllQoutes = () =>
    qoutes.map((qoute) => (
      <Qoute
        key={qoute.id}
        qoute={qoute}
        user={users.find((user) => user.id === qoute.userId)}
        currentUser={currentUser}
        tags={tags}
      />
    ));

  return (
    <div className="dashboard-container">
      <div className="search-options">
        <button onClick={toggleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {isSearchOpen && (
          <div className="search-inputs">
            <input
              type="text"
              placeholder="Search by author, quote, or tag"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="date">Sort by Date</option>
              <option value="likes">Sort by Likes</option>
              <option value="dislikes">Sort by Dislikes</option>
              <option value="comments">Sort by Comments</option>
            </select>
          </div>
        )}
      </div>
      {searchQuery !== "" || sortBy
        ? renderSearchedQoutes()
        : renderAllQoutes()}
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
        <QouteModal
          closeModal={closeModal}
          tags={tags}
          currentUser={currentUser}
        />
      </ReactModal>
      {currentUser.id !== 1 ? (
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
      ) : null}
    </div>
  );
};
export default Dashboard;
