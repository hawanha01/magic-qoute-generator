import React from "react";
import schema from "../../schema";
const Qoute = ({ qoute_id }) => {
  const qoute = schema.qoutes.find((qoute) => qoute.id === qoute_id);
  return (
    <div>
      {qoute.body}
    </div>
  );
};
export default Qoute;
