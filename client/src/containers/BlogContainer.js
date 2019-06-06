import React from 'react';

import Blog from '../components/Blog';

import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetch';
import { fetchGitHubPosts } from '../actions/fetch';

import { handleGitPosts } from '../helpers/gitPosts';

class BlogContainer extends React.Component {

  addGitPosts = () => {
    console.log(this.props.gitPosts)
  }

  render() {
    return (
      <div>
        <h1>Blog</h1>

        <Blog />
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchBlogPosts()
    this.props.fetchGitHubPosts()
  }
}

const mapStateToProps = state => {
  return({
    posts: state.posts,
    gitPosts: handleGitPosts(state)
  })
}

export default connect(mapStateToProps, { fetchBlogPosts, fetchGitHubPosts })(BlogContainer);
