import { useSelector } from "react-redux";

const Report = ({ reportId }) => {
  const reports = useSelector((state) => state.reports.data);
  const users = useSelector((state) => state.users.data);
  const report = reports.find((report) => report.id === reportId);
  return (
    <div>
      <strong>{users.find((user) => user.id === report.userId).name}:</strong>
      <p>{report.description}</p>
    </div>
  );
};
export default Report;
