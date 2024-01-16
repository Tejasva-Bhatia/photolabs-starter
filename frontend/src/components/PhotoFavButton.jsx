import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isActive, setIsActive] = useState(false);
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
        {/* Insert React */}
        <FavIcon selected={isActive} />
      </div>
    </div>
  );
}

export default PhotoFavButton;