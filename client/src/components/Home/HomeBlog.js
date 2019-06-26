import React from 'react';
// allows use of helper functions
import { makeRandomRange } from '../../helpers/makeRandomRange';
// used for translating markdown code
const ReactMarkdown = require('react-markdown')
// handles blog data in Home page
class HomeBlog extends React.Component {
  // which post to display
  state = {
    postIndex: '0'
  }

  a1 = what => {
    what.style.display = 'none';
  }

  a2 = (what, what2) => {
    what.style.display = 'none';
    what2.classList.add("reverse-animation")
    what2.style.display = 'block';
  }

  a3 = (what, what2, what3, what4) => {
    what.style.display = 'none';

    what2.classList.add("reverse-animation")
    what3.classList.add("reverse-animation")
    what4.classList.add("reverse-animation")

    what2.style.display = 'inline-block';
    what3.style.display = 'inline-block';
    what4.style.display = 'inline-block';

    what.classList.remove("run-animation")
    what2.classList.remove("reverse-animation")
    what3.classList.remove("reverse-animation")
    what4.classList.remove("reverse-animation")

    void what.offsetWidth;
    void what2.offsetWidth;
    void what3.offsetWidth;
    void what4.offsetWidth;
  }

  a4 = (what, what2, what3, what4) => {
    what.style.display = 'none';

    what2.style.display = 'inline-block';
    what3.style.display = 'inline-block';
    what4.style.display = 'inline-block';

    what2.classList.add("reverse-animation");
    what3.classList.add("reverse-animation");
    what4.classList.add("reverse-animation");
  }
  // displays individual blog post
  handleClick = event => {
    event.preventDefault();
    event.persist();
    // pass value and set state
    var value = event.target.value

    this.setState({ postIndex: value })
    // get all relevant tag data
    var postModal = document.getElementById('viewPostWrapper')
    var highlight1 = document.getElementById('highlight-post-1')
    var highlight2 = document.getElementById('highlight-post-2')
    var highlight3 = document.getElementById('highlight-post-3')

    postModal.removeEventListener("animationend", this.a4)

    highlight1.addEventListener("animationend", this.a1(highlight1))
    highlight2.addEventListener("animationend", this.a1(highlight2))
    highlight3.addEventListener("animationend", this.a2(highlight3, postModal))

    highlight1.classList.add("run-animation")
    highlight2.classList.add("run-animation")
    highlight3.classList.add("run-animation")
  }
  // closes individual blog post
  handleClose = event => {
    event.preventDefault();

    var postModal = document.getElementById('viewPostWrapper')
    var highlight1 = document.getElementById('highlight-post-1')
    var highlight2 = document.getElementById('highlight-post-2')
    var highlight3 = document.getElementById('highlight-post-3')
    var postClose = document.getElementById('postClose')

    highlight1.removeEventListener("animationend", this.a1)
    highlight2.removeEventListener("animationend", this.a1)
    highlight3.removeEventListener("animationend", this.a2)

    postModal.classList.remove("reverse-animation")
    highlight1.classList.remove("run-animation")
    highlight2.classList.remove("run-animation")
    highlight3.classList.remove("run-animation")

    void postModal.offsetWidth;
    void highlight1.offsetWidth;
    void highlight2.offsetWidth;
    void highlight3.offsetWidth;

    postModal.addEventListener("animationend", this.a4(postModal, highlight1, highlight2, highlight3))

    postModal.classList.add("run-animation")
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
