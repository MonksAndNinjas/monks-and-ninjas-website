export default function blogReducer(
  state ={
    loading: false,
    posts: [],
  }, action) {
    switch (action.type) {

      case 'LOADING_POSTS':
        return {...state, loading: true};

      case 'FETCH_BLOG_POSTS':
        return {loading: false, posts: action.payload}

      default:
        return state;
    }
  };
