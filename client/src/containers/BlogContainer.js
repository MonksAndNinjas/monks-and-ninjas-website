import React from 'react';
// imports blog component
import Blog from '../components/Blog';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../actions/fetch';
import { fetchGitHubPosts } from '../actions/fetch';
// allows use of function to compile post data in proper format
import { handleGitPosts } from '../helpers/gitPosts';
// handles all blog data
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
  // fetch data from API's
  componentDidMount() {
    this.props.fetchBlogPosts()
    this.props.fetchGitHubPosts()
  }
}
// makes blog data from store accessable
const mapStateToProps = state => {
  return({
    posts: state.posts,
    gitPosts: state.gitPosts
  })
}

export default connect(mapStateToProps, { fetchBlogPosts, fetchGitHubPosts })(BlogContainer);
