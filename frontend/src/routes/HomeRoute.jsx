import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ toggleModal, selectedPhoto, favoritedPhotos, setFavoritedPhotos, toggleFavorite, topics, photos, setTopicPhotos }) => {

  return (
    <div className="home-route">
      <TopNavigation
        favoritedPhotos={favoritedPhotos}
        topics={topics}
        setTopicPhotos={setTopicPhotos}
      />
      <PhotoList
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        toggleModal={toggleModal}
        selectedPhoto={selectedPhoto}
        toggleFavorite={toggleFavorite}
        photos={photos}
      />
    </div>
  );
};

export default HomeRoute;