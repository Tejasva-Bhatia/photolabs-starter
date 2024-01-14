import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = ({ toggleModal }) => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation favoritedPhotos={favoritedPhotos} />
      <PhotoList favoritedPhotos={favoritedPhotos} setFavoritedPhotos={setFavoritedPhotos} toggleModal={toggleModal} />
    </div>
  );
};

export default HomeRoute;
