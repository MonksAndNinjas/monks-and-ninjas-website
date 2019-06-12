// handles photos data from GITHUB API for use in store
export default function blogReducer(
  state ={
    loading: false,
    photos: [],
  }, action) {
    switch (action.type) {

      case 'LOADING_PHOTOS':
        return {...state, loading: true};

      case 'FETCH_PHOTOS':
        return {loading: false, posts: action.payload}

      default:
        return state;
    }
  };
