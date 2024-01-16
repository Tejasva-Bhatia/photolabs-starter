import React from 'react';
import '../styles/TopNavigationBar.scss'
import FavBadge from './FavBadge';
import TopicList from './TopicList';

const TopNavigation = (props) => {
  const { favoritedPhotos, topics, setTopicPhotos } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={topics}
        setTopicPhotos={setTopicPhotos}
      />
      <FavBadge
        isFavPhotoExist={favoritedPhotos.length > 0}
      />

    </div>
  )
}

export default TopNavigation;