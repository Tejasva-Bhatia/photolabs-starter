import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {

  const { state, toggleModal, setFavoritedPhotos, setTopicPhotos,} = useApplicationData();

  const { isModalVisible, selectedPhoto, favoritedPhotos, topicData, photoData, toggleFavorite } = state;



  return (
    <div className="App">

      <HomeRoute
        toggleModal={toggleModal}
        selectedPhoto={selectedPhoto}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
        toggleFavorite={toggleFavorite}
        topics={topicData}
        photos={photoData}
        setTopicPhotos={setTopicPhotos}
      />
      {isModalVisible &&
        <PhotoDetailsModal
          closeDisplayModal={toggleModal}
          selectedPhoto={selectedPhoto}
          favoritedPhotos={favoritedPhotos}
          setFavoritedPhotos={setFavoritedPhotos}
          toggleFavorite={toggleFavorite}
        />}
    </div>
  );
};

export default App;