export default function blogReducer(
  state ={
    loading: false,
    posts: [],
  }, action) {
    switch (action.type) {

      case 'LOADING_POSTS':
        return {...state, loading: true};

      case 'FETCH_BLOG_POSTS':
        return {loading: false, posts: state.posts}

      default:
        return state;
    }
  };
