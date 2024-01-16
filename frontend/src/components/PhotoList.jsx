import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";


const PhotoList = (props) => {
  const { favoritedPhotos, setFavoritedPhotos, toggleModal, toggleFavorite } = props;

  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos.map(photo => <PhotoListItem
        key={photo.id}
        photo={photo}
        favoritedPhotos={favoritedPhotos}
        setFavoritedPhotos={setFavoritedPhotos} 
        toggleModal={toggleModal}
        selectedPhoto={props.selectedPhoto}
        toggleFavorite={toggleFavorite}
        />)
      }
    </ul>
  );
};

export default PhotoList;