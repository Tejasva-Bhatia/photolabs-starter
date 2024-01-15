import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import useApplicationData from '../hooks/useApplicationData';

const HomeRoute = ({ toggleModal, selectedPhoto, favoritedPhotos, setFavoritedPhotos }) => {
  
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation favoritedPhotos={favoritedPhotos} />
      <PhotoList
      favoritedPhotos={favoritedPhotos} 
      setFavoritedPhotos={setFavoritedPhotos} 
      toggleModal={toggleModal} 
      selectedPhoto={selectedPhoto}/>
    </div>
  );
};

export default HomeRoute;
