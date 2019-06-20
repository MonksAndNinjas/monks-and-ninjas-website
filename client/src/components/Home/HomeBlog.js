import React from 'react';

import { makeRandomRange } from '../../helpers/makeRandomRange';

class HomeBlog extends React.Component {
  render() {

    var generate = makeRandomRange(this.props.posts.length)
    var x1 = generate(),
        x2 = generate(),
        x3 = generate();
    //console.log(x1, x2, x3)

    return (
      <div id="homeBlogWrapper">
        <h2>Most Recent 3 posts</h2>

        <div id="highlight-post-1" className="news">
          <div className="postHeader">Post 1</div>
          <div className="postPic">Pic Goes Here!</div>
          <div className="postBody">Post Content here</div>
        </div>

        <div id="highlight-post-2" className="news">
          <div className="postHeader">Post 2</div>
          <div className="postPic">Pic Goes Here!</div>
          <div className="postBody">Post Content here</div>
        </div>

        <div id="highlight-post-3" className="news">
          <div className="postHeader">Post 3</div>
          <div className="postPic">Pic Goes Here!</div>
          <div className="postBody">Post Content here</div>
        </div>
      </div>
    )
  }
}

export default HomeBlog;
