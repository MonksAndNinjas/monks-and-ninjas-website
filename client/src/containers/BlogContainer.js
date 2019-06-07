import React from 'react';

import Blog from '../components/Blog';

import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetch';
import { fetchGitHubPosts } from '../actions/fetch';
import { addBlogPost } from '../actions/blog';

import { handleGitPosts } from '../helpers/gitPosts';

class BlogContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>Blog</h1>

        <Blog gitPosts={this.props.gitPosts} blogPosts={this.posts} />
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchBlogPosts()
    this.props.fetchGitHubPosts()
  }
}

const mapStateToProps = state => {
  console.log(state)
  return({
    posts: state.posts,
    gitPosts: handleGitPosts(state)
  })
}

export default connect(mapStateToProps, { fetchBlogPosts, fetchGitHubPosts, addBlogPost })(BlogContainer);
