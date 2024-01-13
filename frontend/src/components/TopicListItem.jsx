import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const {id , title} = props.topic;
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <h2>{title}</h2>
    </div>
  );
};

export default TopicListItem;
