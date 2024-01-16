import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {

  const { state, toggleModal, setFavoritedPhotos, setTopicPhotos,} = useApplicationData();

  const { isModalVisible, selectedPhoto, favoritedPhotos, topicData, photoData } = state;



  return (
    <div className="App">

      <HomeRoute
        toggleModal={toggleModal}
        selectedPhoto={selectedPhoto}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos}
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
        />}
    </div>
  );
};

export default App;