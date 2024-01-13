import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";




const PhotoListItem = (props) => {
  /* Insert React */
  const { user,location,urls} = props.photo;
  const { name, profile } = user;
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
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
