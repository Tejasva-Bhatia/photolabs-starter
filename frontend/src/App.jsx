import React from 'react';
import { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';
import photos from "mocks/photos";
import topics from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    toggleModal, 
    setFavoritedPhotos, 
  } = useApplicationData();

  const { isModalVisible, selectedPhoto, favoritedPhotos } = state;

  return (
    <div className="App">

      <HomeRoute toggleModal={toggleModal} selectedPhoto={selectedPhoto} favoritedPhotos={favoritedPhotos} setFavoritedPhotos={setFavoritedPhotos}
      topics={topics} photos={photos}/>
      {isModalVisible && <PhotoDetailsModal closeDisplayModal={toggleModal} selectedPhoto={selectedPhoto} favoritedPhotos={favoritedPhotos}
          setFavoritedPhotos={setFavoritedPhotos} />}
    </div>
  );
};

export default App;