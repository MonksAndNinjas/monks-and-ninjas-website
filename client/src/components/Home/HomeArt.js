import React from 'react';

class HomeArt extends React.Component {
  render() {
    return (
      <div className="homeArtWrapper">
        <h2>Most Recent and content spotlight</h2>
        <div id="mostRecent" className="news" style={{ height: '250px', width: '250px' }}></div>
        <div id="hightlight" className="news" style={{ height: '250px', width: '250px' }}></div>
      </div>
    )
  }
}

export default HomeArt;
