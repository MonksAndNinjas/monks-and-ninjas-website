import React from 'react';
// connects to store and allows use of functions in /actions
// I place fetch calls here because it avoids duplication of store arrays
import { connect } from 'react-redux';
import { fetchBlogPosts } from './actions/fetch'; // Rails api, could change BlogPosts; no needed
import { fetchGitHubPosts } from './actions/fetch'; // monksandninjas.github.io
import { fetchProjects } from './actions/fetch'; // files in github
import { fetchPhotos } from './actions/fetch';  // monksandninjas.github.io

class App extends React.Component {
  render() {
    return (
      <>
      </>
    );
  }
  // fetch data from API's
  componentDidMount() {
    this.props.fetchBlogPosts()
    this.props.fetchGitHubPosts()
    this.props.fetchProjects()
    this.props.fetchPhotos()
  }
}

const mapStateToProps = state => {
  return({
    postsData: state.posts,
    gitPostsData: state.gitPosts,
    projectsData: state.projects,
    photosData: state.photos
  })
}

export default connect(mapStateToProps, { fetchBlogPosts, fetchGitHubPosts, fetchProjects, fetchPhotos })(App);
