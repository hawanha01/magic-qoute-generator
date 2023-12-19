import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userActionFollowTag } from "../../actions/userActions";

const AllTags = () => {
  const tags = useSelector((state) => state.tags.data);
  const currentUser = useSelector((state) => state.currentUser.data);
  const dispatch = useDispatch();
  const handleFollow = (tagId) => {
    dispatch(userActionFollowTag({ tagId, currentUser: currentUser }));
  };
  return (
    <div>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>
            {tag.title}
            <span>
              <button onClick={() => handleFollow(tag.id)}>follow tag</button>
            </span>
          </li>
        ))}
      </ul>
      <Link to="/dashboard">back to Dashboard</Link>
    </div>
  );
};

export default AllTags;
