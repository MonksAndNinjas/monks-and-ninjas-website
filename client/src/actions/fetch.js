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
// fetches project data from Rails API
export function fetchProjects() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PROJECTS' });

    return fetch('api/projects',{
      accept: 'application/json',
    }).then(response => response.json())
      .then(projects => dispatch({ type: 'FETCH_PROJECTS', payload: projects }))
  }
}
// fetches photos from GITHUB
export function fetchPhotos() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PHOTOS_DATA' });

    return fetch('https://api.github.com/repos/MonksAndNinjas/MonksAndNinjas.github.io/contents/img', {
      accept: 'application/json',
    }).then(response => response.json())
      .then((data) => {
        let photoPromises = data.map((photos) => {
          dispatch({ type: 'LOADING_PHOTOS' })
          // makes individual calls to retrieve data for photo
          return fetch('https://api.github.com/repos/MonksAndNinjas/MonksAndNinjas.github.io/contents/img/' + photos.name, {
            accept: 'application/json',
          }).then(response => response.json())
            .then(photo => dispatch({ type: 'FETCH_PHOTOS', payload: photo }))
        })
        // makes sure all promises have been complete before continuing
        return Promise.all(photoPromises)
      }).then(photos => dispatch({ type: 'FETCH_PHOTOS_DATA', payload: photos }))
  }
}
