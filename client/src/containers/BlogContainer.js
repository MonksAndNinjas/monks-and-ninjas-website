import React from 'react';

import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetch';
import { fetchPostsFromGithub } from '../actions/fetch';

class BlogContainer extends React.Component {
  render() {
    return (
      <div>
        <h1>I'm the blog page!</h1>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchBlogPosts()
    this.props.fetchPostsFromGithub()
  }
}

const mapStateToProps = state => {
  return({
    blogPosts: state.blogPosts
  })
}

export default connect(mapStateToProps, { fetchBlogPosts, fetchPostsFromGithub })(BlogContainer);
