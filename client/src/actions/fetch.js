export function fetchBlogPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_POSTS' });

    return fetch('api/posts', {
      accept: 'application/json',
    }).then(response => response.json())
      .then(posts => dispatch({ type: 'FETCH_BLOG_POSTS', payload: posts }))
  }
}

export function fetchGitHubPosts() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_GIT_POSTS' });

    return fetch('https://api.github.com/repos/MonksAndNinjas/MonksAndNinjas.github.io/contents/_posts', {
      accept: 'application/json',
    }).then(response => response.json())
      .then((posts) => {
          let postPromises = posts.map((post) => {
              dispatch({ type: 'LOADING_GIT_POST' })

              return fetch(post.git_url, {
                accept: 'application/json',
              }).then(response => response.json())
                .then(post => dispatch({ type: 'FETCH_GITHUB_POST', payload: post }))
          })

          return Promise.all(postPromises)
        }).then(data => dispatch({ type: 'FETCH_GITHUB_POSTS', payload: data }))

  }
}
