import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  const { username, imageSource, id, location, profile } = props.photo;
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo by ${username}`} />
      <div className="photo-details">
        <img src={profile} alt={`Photo of ${username}`} />
        <p>{username}</p>
        <p>{`${location.city}, ${location.country}`}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
