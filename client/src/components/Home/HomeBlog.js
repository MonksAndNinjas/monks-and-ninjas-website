import React from 'react';
// allows use of helper functions
import { makeRandomRange } from '../../helpers/makeRandomRange';
// used for translating markdown code
const ReactMarkdown = require('react-markdown')
// handles blog data in Home page
class HomeBlog extends React.Component {

  handleClick = event => {
    event.preventDefault();

    var modal = document.getElementById("viewPost");

    modal.style.display = "none";
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
                <button onClick={event => this.handleClick(event)} style={{ color: 'cornflowerblue' }}>
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
              <div className="postBody"><ReactMarkdown source={post2.content.substring(0, 300) + '...'} /><span style={{ color: 'cornflowerblue' }}>continue reading</span></div>
            </div>
            </div>
        </div>

        <div id="highlight-post-3" className="news">
          <div className="top">{post3.title}</div>

          <div className="lower">
            <div className="left"></div>
            <div className="right">
              <div className="postPic">Pic Goes Here!</div>
              <div className="postBody"><ReactMarkdown source={post3.content.substring(0, 300) + '...'} /><span style={{ color: 'cornflowerblue' }}>continue reading</span></div>
            </div>
            </div>
        </div>





        <div id="viewPost" className="post-modal">
          <span onClick={event => this.handleClose(event)} className="close">&times;</span>
          <div className="modal-content">
            <ReactMarkdown source={post1.content} />
          </div>
        </div>
      </div>
    )
  }
}

export default HomeBlog;
