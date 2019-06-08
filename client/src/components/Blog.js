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
