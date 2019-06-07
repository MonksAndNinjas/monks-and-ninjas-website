export default function blogReducer(
  state ={
    loading: false,
    postLoading: false,
    postsLoading: false,
    posts: [],
    gitPosts: [],
  }, action) {
    switch (action.type) {

      case 'LOADING_POSTS':
        return {...state, loading: true};

      case 'LOADING_GIT_POSTS':
        return {...state, postsLoading: true};

      case 'LOADING_GIT_POST':
        return {...state, postLoading: true};

      case 'FETCH_BLOG_POSTS':
        return {loading: false, posts: state.posts}

      case 'FETCH_GITHUB_POST':
        return {postLoading: false, gitPosts: [...state.gitPosts, action.payload]}

      case 'FETCH_GITHUB_POSTS':
        return {postsLoading: false, gitPosts: state.gitPosts};

      default:
        return state;
    }
  };
