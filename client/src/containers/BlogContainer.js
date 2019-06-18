import React from 'react';
// imports blog component
import BlogArchive from '../components/Blog/BlogArchive';
import Blog from '../components/Blog/Blog';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
// allows use of functions in helpers directory
import { handleGitPosts } from '../helpers/gitPosts';
import { dateSort } from '../helpers/dateSort.js';
// styling
import '../css/blogContainer.css';
// handles all blog data
// decided not to use postsData in store so should be removed from here
class BlogContainer extends React.Component {

  state = {
    postIndex: 0        // index of post to be displayed, default is most recent post
  }
  // should blog posts be displayed?
  displayBlogPosts = () => {
    let blogPosts = this.props.postsData
    let gitPosts = this.props.gitPostsData
    let gitPostsSize = gitPosts.gitPosts.length

    return (blogPosts !== undefined && gitPosts !== undefined && gitPostsSize > 0 && gitPosts.loading === false && blogPosts.loading === false)
  }
  // sets state of post to display
  displayPost = (index) => {
    this.setState({ postIndex: index })
  }
  // changes styling of button to signify that post was selected and displayed
  changeStyle = (index) => {
    var buttonActive = document.querySelectorAll('button')[index]
    var buttonPrev = document.querySelectorAll('button')[this.state.postIndex]

    if (index !== this.state.postIndex) {
      buttonActive.setAttribute("class", "activePost");
      buttonPrev.removeAttribute("class")
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Monks and Ninjas Bizarre Coding Adventures</h1>

        { this.displayBlogPosts() ? (
            <div className="blogWrapper">
              <BlogArchive changeStyle={this.changeStyle} displayPost={this.displayPost} posts={[...this.props.postsData.posts.sort(dateSort), ...handleGitPosts(this.props.gitPostsData).sort(dateSort)]} />
              <Blog postIndex={this.state.postIndex} posts={[...this.props.postsData.posts.sort(dateSort), ...handleGitPosts(this.props.gitPostsData).sort(dateSort)]} />
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
    postsData: state.posts,
    gitPostsData: state.gitPosts
  })
}

export default connect(mapStateToProps)(BlogContainer);
