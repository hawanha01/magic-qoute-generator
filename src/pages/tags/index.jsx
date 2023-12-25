import { useDispatch, useSelector } from "react-redux";
import { userActionFollowTag } from "../../actions/userActions";
import "./AllTags.css";

const AllTags = () => {
  const tags = useSelector((state) => state.tags.data);
  const currentUser = useSelector((state) => state.currentUser.data);
  const dispatch = useDispatch();

  const handleFollow = (tagId) => {
    dispatch(userActionFollowTag({ tagId, currentUser: currentUser }));
  };

  return (
    <div className="all-tags-container">
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag.id} className="tag-list-item">
            <span className="tag-title">{tag.title}</span>
            <button
              className="follow-button"
              onClick={() => handleFollow(tag.id)}
            >
              Follow Tag
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTags;
