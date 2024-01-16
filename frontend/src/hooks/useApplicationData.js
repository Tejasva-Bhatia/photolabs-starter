import { useReducer, useEffect } from 'react';

// Define action types
const TOGGLE_MODAL = 'TOGGLE_MODAL';
const SET_SELECTED_PHOTO = 'SET_SELECTED_PHOTO';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
const SET_FAVORITED_PHOTOS = 'SET_FAVORITED_PHOTOS';
const SET_TOPIC_DATA = 'SET_TOPIC_DATA';
const SET_PHOTO_DATA = 'SET_PHOTO_DATA';

const initialState = {
  isModalVisible: false,
  selectedPhoto: null,
  favoritedPhotos: [],
  topicData: [],
  photoData: [],
};

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
    case SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  // State initialization using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

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

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_PHOTO_DATA', payload: data });
      })
      .catch((error) => console.error('Error fetching photo data:', error));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched topic data:', data);
        dispatch({ type: SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => console.error('Error fetching topic data:', error));
  }, []);

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