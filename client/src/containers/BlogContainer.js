import React from 'react';
// imports blog component
import BlogArchive from '../components/Blog/BlogArchive';
import Blog from '../components/Blog/Blog';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
// allows use of functions in helpers directory
import { handleGitPosts } from '../helpers/gitPosts';
import { dateSort } from '../helpers/dateSort.js';
import { displayBlogPosts } from '../helpers/displayContent';
// styling
import '../css/blogContainer.css';
// handles all blog data
class BlogContainer extends React.Component {

  state = {
    postIndex: 0        // index of post to be displayed, default is most recent post
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
        <h1>Monks and Ninjas Bizarre Adventures</h1>

        { displayBlogPosts(this.props.gitPostsData) ? (
            <div className="blogWrapper">
              <BlogArchive changeStyle={this.changeStyle} displayPost={this.displayPost} posts={handleGitPosts(this.props.gitPostsData).sort(dateSort)} />
              <Blog postIndex={this.state.postIndex} posts={handleGitPosts(this.props.gitPostsData).sort(dateSort)} />
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
    gitPostsData: state.gitPosts
  })
}

export default connect(mapStateToProps)(BlogContainer);
