import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = ({ topic, setTopicPhotos }) => {
  const { id, title } = topic;

  const handleClick = () => {
    setTopicPhotos(id);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <h2>{title}</h2>
    </div>
  );
};

export default TopicListItem;