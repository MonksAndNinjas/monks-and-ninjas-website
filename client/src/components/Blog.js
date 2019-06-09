import React from 'react';
// used for translating markdown code
const ReactMarkdown = require('react-markdown')
// renders post data passed down from blog container
class Blog extends React.Component {
  render() {
    return(
      <div className="postDisplay">
        Display post content and info here!
      </div>
    )
  }
}

export default Blog;


/*
const renderPosts = this.props.posts.map((post, index) => (
  <ul id={`blog-${index}`} key={index}>
    <h3>Title: {post.title}</h3>
    <ReactMarkdown source={post.content} />
    <span>Date Published:
      {(post.datePublished === post.lastPublished) ? post.datePublished : post.lastPublished}
    </span>
  </ul>
));
*/
