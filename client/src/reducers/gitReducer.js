export default function gitReducer(
  state={
    loading: false,
    postLoading: false,
    gitPosts: [],
  }, action) {
    switch (action.type) {

      case 'LOADING_GIT_POSTS':
        return {...state, loading: true};

      case 'LOADING_GIT_POST':
        return {...state, postLoading: true};

      case 'FETCH_GITHUB_POSTS':
        return {loading: false, gitPosts: state.gitPosts}

      case 'FETCH_GITHUB_POST':
        return {postLoading: false, gitPosts: [...state.gitPosts, action.payload]}

      default:
        return state;
  }
}
