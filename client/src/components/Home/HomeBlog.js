import React from 'react';

class HomeBlog extends React.Component {
  render() {
    return (
      <div id="homeBlogWrapper">
        <h2>Most Recent 3 posts</h2>

        <div id="mostRecent post  1" className="news" style={{ height: '250px', width: '250px' }}></div>
        <div id="mostRecent post 2" className="news" style={{ height: '250px', width: '250px' }}></div>
        <div id="mostRecent post 3" className="news" style={{ height: '250px', width: '250px' }}></div>
      </div>
    )
  }
}

export default HomeBlog;
