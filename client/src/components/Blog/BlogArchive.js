import React from 'react';
// renders posts data passed down from blog container
class BlogArchive extends React.Component {
  // displays clicked post
  handleClick = event => {
    event.preventDefault();
    // sets postIndex state and then changes styling of selected post to signify active
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
        {renderPosts}
      </div>
    );
  }
  // designates active post, changes class to appy css to it
  componentDidMount() {
    var buttonActive = document.querySelectorAll('button')[0]

    buttonActive.setAttribute("class", "activePost");
  }
}

export default BlogArchive;
