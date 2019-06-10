// handles project data from Rails API for use in store
export default function projectReducer(
  state ={
    loading: false,
    projects: [],
  }, action) {
    switch (action.type) {

      case 'LOADING_PROJECTS':
        return {...state, loading: true};

      case 'FETCH_PROJECTS':
        return {loading: false, projects: action.payload}

      default:
        return state;
    }
  };
