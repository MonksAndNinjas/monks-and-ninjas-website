import React from 'react';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
import { fetchBlogPosts } from './actions/fetch';
import { fetchGitHubPosts } from './actions/fetch';
import { fetchProjects } from './actions/fetch';
import { fetchPhotos } from './actions/fetch';
// nothing is handled in here yet
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
    posts: state.posts,
    gitPosts: state.gitPosts,
    projects: state.projects,
    photos: state.photos
  })
}

export default connect(mapStateToProps, { fetchBlogPosts, fetchGitHubPosts, fetchProjects, fetchPhotos })(App);
