import React from 'react';
// imports blog component
import Blog from '../components/Blog';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
// allows use of functions in helpers directory
import { handleGitPosts } from '../helpers/gitPosts';
import { dateSort } from '../helpers/dateSort.js';
// handles all blog data
class BlogContainer extends React.Component {
  // should blog posts be displayed?
  displayBlogPosts = () => {
    let blogPosts = this.props.posts
    let gitPosts = this.props.gitPosts
    let gitPostsSize = gitPosts.gitPosts.length

    return (blogPosts !== undefined && gitPosts !== undefined && gitPostsSize > 0 && gitPosts.loading === false && blogPosts.loading === false)
  }

  render() {
    return (
      <div className="container">
        <h1>Blog</h1>
      </div>
    );
  }
}
// makes blog data from store accessable
const mapStateToProps = state => {
  return({
    posts: state.posts,
    gitPosts: state.gitPosts
  })
}

export default connect(mapStateToProps)(BlogContainer);


/*
{ this.displayBlogPosts() ? (
    <Blog posts={[...this.props.posts.posts.sort(dateSort), ...handleGitPosts(this.props.gitPosts).sort(dateSort)]} />
  ) : (
    null
  )}
*/
