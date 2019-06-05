export default function blogReducer(
  state ={
    loading: false,
    posts: []
  }, action) {
    switch (action.type) {

      case 'LOADING_POSTS':
        console.log('blog reducer loading posts')
        return {...state, loading: true};

      case 'FETCH_BLOG_POSTS':
        console.log('blog reducer fetch posts')
        return {loading: false, posts: action.payload}

      default:
        return state;
    }
  };
