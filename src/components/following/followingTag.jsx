import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { userActionUnfollowTag } from "../../actions/userActions";

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
    <div>
      <ul>
        {user.tag_ids.map((tagId) => (
          <li key={tagId}>
            {tags.find((tag) => tag.id === tagId).title}
            <span>
              <button onClick={() => handleUnfollow(tagId)}>unfollow</button>
            </span>
          </li>
        ))}
      </ul>
      <Link to="/dashboard">back to Dashboard</Link>
    </div>
  );
};
export default FollowingTag;
