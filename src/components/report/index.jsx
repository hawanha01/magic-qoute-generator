import { useSelector } from "react-redux";
import profile_picture from "../../assets/profile_picture/profile_picture.jpg";
import "./Report.css";

const Report = ({ reportId }) => {
  const reports = useSelector((state) => state.reports.data);
  const users = useSelector((state) => state.users.data);
  const report = reports.find((report) => report.id === reportId);

  return (
    <div className="report-container">
      <div className="report-profile-image">
        <img src={profile_picture} alt="Profile" />
      </div>
      <div className="report-user-info">
        <b>{users.find((user) => user.id === report.userId).name}</b>
        <div className="report-text">{report.description}</div>
      </div>
    </div>
  );
};

export default Report;
