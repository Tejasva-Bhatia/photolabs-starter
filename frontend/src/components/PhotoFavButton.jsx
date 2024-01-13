import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [isActive, setIsActive] = useState(false);
  const handleClick= ()=>{
      setIsActive(!isActive);
  }
  return (
    <div className= "photo-list__fav-icon" onClick={handleClick} >
      <div className="photo-list__fav-icon-svg"  >
        {/* Insert React */}
        <FavIcon selected={isActive}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;