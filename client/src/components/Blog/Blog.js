import React from 'react';
// used for translating markdown code
const ReactMarkdown = require('react-markdown')
// renders post data passed down from blog container
class Blog extends React.Component {

  render() {

    const renderPost = this.props.posts[this.props.postIndex]

    return(
      <div className="postWrapper">
        <h2>{renderPost.title}</h2>

        <ReactMarkdown source={renderPost.content} />

        <span style={{ 'color': 'grey'}}>Date Published: {renderPost.lastPublished}</span>
      </div>
    )
  }
}

export default Blog;
