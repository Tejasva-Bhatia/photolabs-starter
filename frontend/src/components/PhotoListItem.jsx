import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  const { username, imageSource, id, location, profile } = props.photo;
  return (
    <div className="photo-list-item photo-list__item">
      <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} alt={`Photo of ${username}`} />
        <div className="photo-list__user-info">
          <p className="photo-list__user-info__username">{username}</p>
          <p className="photo-list__user-location">{`${location.city}, ${location.country}`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
