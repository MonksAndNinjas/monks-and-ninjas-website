import React from 'react';
// renders post data passed down from blog container

const ReactMarkdown = require('react-markdown')
// <p>Content: <ReactMarkdown source={post.content}</p>

class Blog extends React.Component {

  render() {

    const renderPosts = this.props.posts.map((post, index) => (
      <ul id={`blog-${index}`} key={index}>
        <h3>Title: {post.title}</h3>
        <p>Content: {post.content}</p>
        <span>Date Published:
          {(post.datePublished === post.lastPublished) ? post.datePublished : post.lastPublished}
        </span>
      </ul>
    ));

    return (
      <div>
        { renderPosts }
      </div>
    );
  }
}

export default Blog;
