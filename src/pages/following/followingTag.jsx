// FollowingTag.jsx

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userActionUnfollowTag } from "../../actions/userActions";
import "./FollowingTag.css";

const FollowingTag = () => {
  const userId = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);
  const tags = useSelector((state) => state.tags.data);
  const user = users.find((user) => user.id === parseInt(userId.userId));

  const handleUnfollow = (tagId) => {
    dispatch(userActionUnfollowTag({ userId: parseInt(userId.userId), tagId }));
  };

  return (
    <div className="following-tag-container">
      <ul className="tag-list">
        {user.tagIds.map((tagId) => (
          <li key={tagId} className="tag-list-item">
            <span className="tag-title">
              {tags.find((tag) => tag.id === tagId).title}
            </span>
            <button
              className="unfollow-button"
              onClick={() => handleUnfollow(tagId)}
            >
              Unfollow
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowingTag;
