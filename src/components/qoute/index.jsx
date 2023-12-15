import React from "react";
import { useSelector } from "react-redux";
import Like from "../like";
import Dislike from "../dislike";
const Qoute = ({ qoute_id }) => {
  const qoutes = useSelector((state) => state.qoutes.qoutes);
  const qoute = qoutes.find((qoute) => qoute.id === qoute_id);
  const tags = useSelector((state) => state.tags.tags);
  const associated_tags = tags.filter((tag) => qoute.tag_ids.includes(tag.id));
  const tag_names = associated_tags.map((tag) => tag.title);
  return (
    <div>
      <div>
        Body: {qoute.body},tags: {tag_names}
      </div>
      <div>
        <Like qouteId={qoute_id} />
        <Dislike qouteId={qoute_id} />
      </div>
    </div>
  );
};
export default Qoute;
