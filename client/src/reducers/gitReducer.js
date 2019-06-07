export default function gitReducer(
  state={
    loading: false,
    gitPosts: [],
  }, action) {
    switch (action.type) {

      case 'LOADING_POSTS':
        return {...state, loading: true};

      case 'FETCH_GITHUB_POSTS':
        return {loading: false, gitPosts: state.gitPosts}

      default:
        return state;
)
