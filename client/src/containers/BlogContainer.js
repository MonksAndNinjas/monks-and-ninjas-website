import React from 'react';

import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetch';
import { fetchPostsFromGithub } from '../actions/fetch';
import { handleGitPosts } from '../helpers/gitPosts';

class BlogContainer extends React.Component {

  fetchGitPost = (gitPosts) => {
    console.log(gitPosts)
  //  if (gitPosts !== undefined) {
    //  gitPosts.forEach((post) => {
      //  console.log(post)
      //});
  //  }
  }

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
    posts: state.posts,
    gitPosts: this.fetchGitPost(state.gitPosts)
  })
}

export default connect(mapStateToProps, { fetchBlogPosts, fetchPostsFromGithub })(BlogContainer);
