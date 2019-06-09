import React from 'react';
// imports blog component
import BlogArchive from '../components/BlogArchive';
import Blog from '../components/Blog';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
// allows use of functions in helpers directory
import { handleGitPosts } from '../helpers/gitPosts';
import { dateSort } from '../helpers/dateSort.js';
// styling
import './blogContainer.css';
// handles all blog data
class BlogContainer extends React.Component {

  state = {
    postIndex: 0
  }
  // should blog posts be displayed?
  displayBlogPosts = () => {
    let blogPosts = this.props.posts
    let gitPosts = this.props.gitPosts
    let gitPostsSize = gitPosts.gitPosts.length

    return (blogPosts !== undefined && gitPosts !== undefined && gitPostsSize > 0 && gitPosts.loading === false && blogPosts.loading === false)
  }

  displayPost = (index) => {
    this.setState({ postIndex: index })
  }

  changeStyle = (index) => {
    console.log(index, this.state.postIndex)
    var buttonActive = document.querySelectorAll('button')[index]
    var buttonPrev = document.querySelectorAll('button')[this.state.postIndex]

    buttonActive.style.backgroundColor = "red";
      buttonPrev.style.backgroundColor = "white";
  }

  render() {
    return (
      <div className="container">
        <h1>Blog</h1>

        { this.displayBlogPosts() ? (
            <div className="blogWrapper">
              <BlogArchive changeStyle={this.changeStyle} displayPost={this.displayPost} posts={[...this.props.posts.posts.sort(dateSort), ...handleGitPosts(this.props.gitPosts).sort(dateSort)]} />
              <Blog postIndex={this.state.postIndex} posts={[...this.props.posts.posts.sort(dateSort), ...handleGitPosts(this.props.gitPosts).sort(dateSort)]} />
            </div>
          ) : (
            null
          )}
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
