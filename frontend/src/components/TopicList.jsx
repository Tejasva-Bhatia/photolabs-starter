import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = ({ topics, setTopicPhotos }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => <TopicListItem
        key={topic.id}
        topic={topic}
        setTopicPhotos={setTopicPhotos}
      />)}
    </div>
  );
};

export default TopicList;