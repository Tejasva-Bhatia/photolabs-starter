import { useReducer } from 'react';

// Define action types
const TOGGLE_MODAL = 'TOGGLE_MODAL';
const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const SET_FAVORITED_PHOTOS = 'SET_FAVORITED_PHOTOS'; 

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, isModalVisible: !state.isModalVisible, selectedPhoto: action.payload };
    case SET_SELECTED_PHOTO:
      return { ...state, selectedPhoto: action.payload };
    case TOGGLE_FAVORITE:
      const updatedFavoritedPhotos = state.favoritedPhotos.some((favPhoto) => favPhoto.id === action.payload.id)
        ? state.favoritedPhotos.filter((favPhoto) => favPhoto.id !== action.payload.id)
        : [...state.favoritedPhotos, action.payload];
      return { ...state, favoritedPhotos: updatedFavoritedPhotos };
    case SET_FAVORITED_PHOTOS: // New case to handle setting favoritedPhotos
      return { ...state, favoritedPhotos: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  // State initialization using useReducer
  const [state, dispatch] = useReducer(reducer, {
    isModalVisible: false,
    selectedPhoto: null,
    favoritedPhotos: [],
  });

  // Actions
  const toggleModal = (photo) => {
    dispatch({ type: TOGGLE_MODAL, payload: photo });
  };

  const setSelectedPhoto = (photo) => {
    dispatch({ type: SET_SELECTED_PHOTO, payload: photo });
  };

  const toggleFavorite = (photo) => {
    dispatch({ type: TOGGLE_FAVORITE, payload: photo });
  };

  // New action to set favoritedPhotos
  const setFavoritedPhotos = (photos) => {
    dispatch({ type: SET_FAVORITED_PHOTOS, payload: photos });
  };

  // Return the state and actions
  return {
    state,
    toggleModal,
    setSelectedPhoto,
    toggleFavorite,
    setFavoritedPhotos, // Provide the setFavoritedPhotos function
  };
};

export default useApplicationData;
