import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  const { favoritedPhotos, setFavoritedPhotos, toggleModal, toggleFavorite, photos } = props;

  return (
    <ul className="photo-list">
      {photos && photos.map(photo => <PhotoListItem
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