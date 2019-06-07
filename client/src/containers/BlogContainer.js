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

        { (this.props.posts !== undefined && this.props.gitPosts !== undefined && this.props.gitPosts.gitPosts.length > 0 && this.props.gitPosts.loading === false && this.props.posts.loading === false) ? (
            <Blog posts={[...this.props.posts.posts, ...handleGitPosts(this.props.gitPosts)]} />
          ) : (
            null
          )}
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
    gitPosts: state.gitPosts
  })
}

export default connect(mapStateToProps, { fetchBlogPosts, fetchGitHubPosts, addBlogPost })(BlogContainer);
