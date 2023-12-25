import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./style.css";

const UserReported = () => {
  const userId = useParams();
  const users = useSelector((state) => state.users.data);
  const reports = useSelector((state) => state.reports.data);
  const user = users.find((user) => user.id === parseInt(userId.userId));

  return (
    <div className="user-reported-container">
      <table className="report-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Report Description</th>
          </tr>
        </thead>
        <tbody>
          {user.reportIds.map((reportId) => (
            <tr key={reportId}>
              <td>
                <strong>
                  {
                    users.find(
                      (user) =>
                        user.id ===
                        reports.find((report) => report.id === reportId).userId
                    ).name
                  }
                </strong>
              </td>
              <td>
                {reports.find((report) => report.id === reportId).description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserReported;
