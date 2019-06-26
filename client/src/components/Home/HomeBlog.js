import React from 'react';
// allows use of helper functions
import { makeRandomRange } from '../../helpers/makeRandomRange';
import { onClickAnimation } from '../../helpers/blogAnimation';
import { onCloseAnimation } from '../../helpers/blogAnimation';
// used for translating markdown code
const ReactMarkdown = require('react-markdown')
// handles blog data in Home page
class HomeBlog extends React.Component {
  // which post to display
  state = {
    postIndex: '0'
  }
  // gathers necessary data for animation
  gatherVariables = () => {
    var postModal = document.getElementById('viewPostWrapper')
    var highlight1 = document.getElementById('highlight-post-1')
    var highlight2 = document.getElementById('highlight-post-2')
    var highlight3 = document.getElementById('highlight-post-3')

    return [postModal, highlight1, highlight2, highlight3]
  }
  // displays individual blog post
  handleClick = event => {
    event.preventDefault();
    event.persist();
    // set state
    this.setState({ postIndex: event.target.value })
    // apply animation
    onClickAnimation(this.gatherVariables());
  }
  // closes individual blog post
  handleClose = event => {
    event.preventDefault();
    // apply animation
    onCloseAnimation(this.gatherVariables());
  }

  render() {

    const postsArray = this.props.posts;
    const post1 = postsArray[this.props.indexArray[0]];
    const post2 = postsArray[this.props.indexArray[1]];
    const post3 = postsArray[this.props.indexArray[2]];
    //console.log(post1, post2, post3)

    return (
      <div id="homeBlogWrapper">
        <h2>Most Recent 3 posts</h2>

        <div id="highlight-post-1" className="news">
          <div className="top">{post1.title}</div>
          <div className="lower">
            <div className="left"></div>
            <div className="right">
              <div className="postPic">Pic Goes Here!</div>
              <div className="postBody"><ReactMarkdown source={post1.content.substring(0, 300) + '...'} />
                <button value={this.props.indexArray[0]} onClick={event => this.handleClick(event)} style={{ color: 'cornflowerblue' }}>
                  continue reading
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="highlight-post-2" className="news">
          <div className="top">{post2.title}</div>
          <div className="lower">
            <div className="left"></div>
            <div className="right">
              <div className="postPic">Pic Goes Here!</div>
              <div className="postBody"><ReactMarkdown source={post2.content.substring(0, 300) + '...'} />
                <button value={this.props.indexArray[1]} onClick={event => this.handleClick(event)} style={{ color: 'cornflowerblue' }}>
                  continue reading
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="highlight-post-3" className="news">
          <div className="top">{post3.title}</div>
          <div className="lower">
            <div className="left"></div>
            <div className="right">
              <div className="postPic">Pic Goes Here!</div>
              <div className="postBody"><ReactMarkdown source={post3.content.substring(0, 300) + '...'} />
                <button value={this.props.indexArray[2]} onClick={event => this.handleClick(event)} style={{ color: 'cornflowerblue' }}>
                  continue reading
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="viewPostWrapper">
        <span onClick={event => this.handleClose(event)} className="postClose">&times;</span>
          <div id="viewPost" className="post-modal">
            <div className="post-modal-content">
              <ReactMarkdown source={postsArray[this.state.postIndex].title + postsArray[this.state.postIndex].content} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeBlog;
