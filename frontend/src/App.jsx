import React from 'react';
import { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null); {/* Add selectedPhoto state */}

  const toggleModal = (photo) => {
    setIsModalVisible(!isModalVisible);
    setSelectedPhoto(photo);
  };

  return (
    <div className="App">

      <HomeRoute toggleModal={toggleModal} selectedPhoto={selectedPhoto}/>
      {isModalVisible && <PhotoDetailsModal closeDisplayModal={toggleModal} selectedPhoto={selectedPhoto} />}
    </div>
  );
};

export default App;
