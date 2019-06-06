import React from 'react';

import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetch';
import { fetchGitHubPosts } from '../actions/fetch';

import { handleGitPosts } from '../helpers/gitPosts';

class BlogContainer extends React.Component {

  render() {
    console.log(this.props.gitPosts)
    return (
      <div>
        <h1>I'm the blog page!</h1>
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
