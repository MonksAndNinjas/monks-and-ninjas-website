// handles photos data from GITHUB API for use in store
export default function blogReducer(
  state ={
    loading: false,
    photosLoading: false,
    photos: [],
  }, action) {
    switch (action.type) {

      case 'LOADING_PHOTOS_DATA':
        return {...state, loading: true};

      case 'LOADING_PHOTOS':
        return {...state, photosLoading: true};

      case 'FETCH_PHOTOS_DATA':
        return {loading: false, photos: state.photos}

      case 'FETCH_PHOTOS':
        return {photosLoading: false, photos: [...state.photos, action.payload]}

      default:
        return state;
    }
  };
