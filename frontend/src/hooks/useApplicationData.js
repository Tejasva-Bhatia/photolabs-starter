// hooks/useApplicationData.js
import { useState } from 'react';

const useApplicationData = () => {
  // State initialization
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  // Actions
  const toggleModal = (photo) => {
    setIsModalVisible(!isModalVisible);
    setSelectedPhoto(photo);
  };

  const toggleFavorite = (photo) => {
    const updatedFavoritedPhotos = favoritedPhotos.some((favPhoto) => favPhoto.id === photo.id)
      ? favoritedPhotos.filter((favPhoto) => favPhoto.id !== photo.id)
      : [...favoritedPhotos, photo];

    setFavoritedPhotos(updatedFavoritedPhotos);
  };

  
  // Return the state and actions
  return {
    state: {
      isModalVisible,
      selectedPhoto,
      favoritedPhotos,
    },
    toggleModal,
    setFavoritedPhotos,
    toggleFavorite,
  };
};

export default useApplicationData;