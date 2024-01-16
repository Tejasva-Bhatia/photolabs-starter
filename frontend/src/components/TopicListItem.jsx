import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};


const TopicListItem = ({topic, setTopicPhotos}) => {
  const {id , title} = topic;

  const handleClick = () => {
    console.log(id);
    setTopicPhotos(id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      {/* Insert React */}
      <h2>{title}</h2>
    </div>
  );
};

export default TopicListItem;