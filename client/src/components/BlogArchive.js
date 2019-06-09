import React from 'react';
// renders post data passed down from blog container
class BlogArchive extends React.Component {

  handleClick = event => {
    event.preventDefault();
    this.props.displayPost(event.target.value);
    this.props.changeStyle(event.target.value);
  }

  render() {

    const renderPosts = this.props.posts.map((post, index) => (
      <ul id={`blog-${index}`} key={index}>
        <button value={index} onClick={event => this.handleClick(event)}>{post.title}</button>
      </ul>
    ));

    return (
      <div className="postsWrapper">
        Display list of all posts here!

        {renderPosts}
      </div>
    );
  }

  componentDidMount() {
    var buttonActive = document.querySelectorAll('button')[0]

    buttonActive.setAttribute("class", "activePost");
  }
}

export default BlogArchive;
