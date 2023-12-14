import React from "react";
import Qoute from "../../components/qoute";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const qoutes = useSelector((state) => state.qoutes.qoutes);
  return (
    <div>
      {qoutes.map((qoute) => (
        <Qoute key={qoute.id} qoute_id={qoute.id} />
      ))}
      <button>
        Create new qoute
      </button>
    </div>
  );
};
export default Dashboard;
