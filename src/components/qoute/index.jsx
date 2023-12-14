import React from "react";
import { useSelector } from "react-redux";
const Qoute = ({ qoute_id }) => {
  const qoutes = useSelector((state) => state.qoutes.qoutes);
  const qoute = qoutes.find((qoute) => qoute.id === qoute_id);
  const tags = useSelector((state) => state.tags.tags);
  const associated_tags = tags.filter((tag) => qoute.tag_ids.includes(tag.id));
  const tag_names = associated_tags.map((tag) => tag.title);
  return (
    <div>
      <p>
        Body: {qoute.body},tags: {tag_names}
      </p>
    </div>
  );
};
export default Qoute;
