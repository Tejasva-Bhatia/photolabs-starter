import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ toggleModal, selectedPhoto, favoritedPhotos, setFavoritedPhotos, toggleFavorite,topics, photos }) => {
  
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation favoritedPhotos={favoritedPhotos} topics={topics}/>
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
