import React from 'react';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeDisplayModal, selectedPhoto, favoritedPhotos, setFavoritedPhotos, toggleFavorite }) => {

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
          <PhotoFavButton
            photo={selectedPhoto}
            favoritedPhotos={favoritedPhotos}
            setFavoritedPhotos={setFavoritedPhotos}
            toggleFavorite={toggleFavorite} />
          <img className="photo-details-modal__image" src={selectedPhoto.urls.full}></img>
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
      <div className="photo-details-modal__images">
        <div className="photo-details-modal__header">
          Similar Photos
        </div>
        <PhotoList
          favoritedPhotos={favoritedPhotos}
          setFavoritedPhotos={setFavoritedPhotos}
          toggleModal={() => { }}
          selectedPhoto={selectedPhoto}
          photos={Object.values(selectedPhoto.similar_photos || {})}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;