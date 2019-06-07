// fetches data from Rails API
export function fetchBlogPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });

    return fetch('api/posts', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(posts => dispatch({ type: 'FETCH_BLOG_POSTS', payload: posts }))
  }
}
// fetches data from Github API
export function fetchGitHubPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GIT_POSTS' });
    // fetches all posts within repository
    return fetch('https://api.github.com/repos/MonksAndNinjas/MonksAndNinjas.github.io/contents/_posts', {
      accept: 'application/json',
    }).then(response => response.json())
      .then((posts) => {
          let postPromises = posts.map((post) => {
              dispatch({ type: 'LOADING_GIT_POST' })
              // makes individual calls to retrieve data for a post
              return fetch(post.git_url, {
                accept: 'application/json',
              }).then(response => response.json())
                .then(post => dispatch({ type: 'FETCH_GITHUB_POST', payload: post }))
          })
          // makes sure all promises have been completed before continuing
          return Promise.all(postPromises)
        }).then(data => dispatch({ type: 'FETCH_GITHUB_POSTS', payload: data }))

  }
}
