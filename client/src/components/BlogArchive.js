import React from 'react';
// used for translating markdown code
const ReactMarkdown = require('react-markdown')
// renders post data passed down from blog container
class BlogArchive extends React.Component {

  render() {

    const renderPosts = this.props.posts.map((post, index) => (
      <ul id={`blog-${index}`} key={index}>
        <button value={index} onClick={event => this.handleClick(event)}>{post.title}</button>
      </ul>
    ));

    return (
      <div className="postsList">
        Display list of all posts here!

        {renderPosts}
      </div>
    );
  }
}

export default BlogArchive;
