export function fetchBlogPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });

    return fetch('api/posts', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(posts => dispatch({ type: 'FETCH_BLOG_POSTS', payload: posts }))
  }
}
