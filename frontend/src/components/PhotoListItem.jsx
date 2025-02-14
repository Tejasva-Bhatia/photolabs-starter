import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { user, location, urls } = props.photo;
  const { name, profile } = user;

  const handlePhotoClick = () => {
    // Call the toggleModal function to open the modal
    props.toggleModal(props.photo);
  };

  return (
    <div className="photo-list__item" onClick={handlePhotoClick}>
      <PhotoFavButton
        photo={props.photo}
        favoritedPhotos={props.favoritedPhotos}
        toggleFavorite={props.toggleFavorite}
        setFavoritedPhotos={props.setFavoritedPhotos}
      />
      <img className="photo-list__image" src={urls.full} alt={`Photo by ${name}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`Photo of ${name}`} />
        <div className="photo-list__user-info">
          <p >{name}</p>
          <p className=" photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
