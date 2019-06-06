export function fetchBlogPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });

    return fetch('api/posts', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(posts => dispatch({ type: 'FETCH_BLOG_POSTS', payload: posts }))
  }
}

export function fetchPostsFromGithub() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });

    return fetch('https://api.github.com/repos/MonksAndNinjas/MonksAndNinjas.github.io/contents/_posts', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(posts => dispatch({ type: 'FETCH_GITHUB_POSTS', payload: posts}))
  }
}
