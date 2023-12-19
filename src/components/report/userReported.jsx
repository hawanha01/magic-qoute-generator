import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const UserReported = () => {
  const userId = useParams();
  const users = useSelector((state) => state.users.data);
  const reports = useSelector((state) => state.reports.data);
  const user = users.find((user) => user.id === parseInt(userId.userId));
  return (
    <div>
      <ul>
        {user.reportIds.map((reportId) => (
          <li key={reportId}>
            <strong>
              {
                users.find(
                  (user) =>
                    user.id ===
                    reports.find((report) => report.id === reportId).user_id
                ).name
              }
              :
            </strong>
            {reports.find((report) => report.id === reportId).description}
          </li>
        ))}
      </ul>
      <Link to="/dashboard">Back to dashboard</Link>
    </div>
  );
};
export default UserReported;
