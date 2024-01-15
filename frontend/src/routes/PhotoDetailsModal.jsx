import React from 'react';
import photos from 'mocks/photos';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeDisplayModal, selectedPhoto }) => {

  console.log("Selected Photo Details:", selectedPhoto);
  const handleCloseClick = () => {
    closeDisplayModal();
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={handleCloseClick}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__top-bar">
        <div>
        <PhotoFavButton  />
          <img className="photo-details-modal__image" src={selectedPhoto.urls.regular}></img>
          <div className="photo-details-modal__header">
            <img className="photo-details-modal__photographer-profile" src={selectedPhoto.user.profile}></img>
            <div className="photo-details-modal__photographer-details">
              <div className="photo-details-modal__photographer-info">
                <div>{selectedPhoto.user.name}</div>
                <div className="photo-details-modal__photographer-location">{selectedPhoto.location.city} {selectedPhoto.location.country}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="photo-details-modal__header">
        Similar Photos
      </div>

      <div className="photo-details-modal__images">
        <PhotoList
          photoData={photos.filter(photo => photo.id !== selectedPhoto.id)}
        />
      </div>


    </div>
  )
};

export default PhotoDetailsModal;
