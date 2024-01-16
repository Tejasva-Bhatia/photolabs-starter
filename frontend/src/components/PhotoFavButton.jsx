import React, { useState, useEffect } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    // Update the button state when favoritedPhotos prop changes
    setIsActive(props.favoritedPhotos.some(photo => photo.id === props.photo.id));
  }, [props.favoritedPhotos, props.photo.id]);

  const handleClick = () => {

    const updatedFavoritedPhotos = isActive
      ? props.favoritedPhotos.filter(photo => photo.id !== props.photo.id)
      : [...props.favoritedPhotos, props.photo];

    // Update the list of favorited photos
    props.setFavoritedPhotos(updatedFavoritedPhotos);

    setIsActive(!isActive);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick} >
      <div className="photo-list__fav-icon-svg"  >
        <FavIcon selected={isActive} />
      </div>
    </div>
  );
}

export default PhotoFavButton;