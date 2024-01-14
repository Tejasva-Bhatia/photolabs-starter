import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation favoritedPhotos={favoritedPhotos} />
      <PhotoList favoritedPhotos={favoritedPhotos} setFavoritedPhotos={setFavoritedPhotos} />
    </div>
  );
};

export default HomeRoute;
