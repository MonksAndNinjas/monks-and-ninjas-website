import React from 'react';

class HomeArt extends React.Component {
  render() {
    return (
      <div id="homeArtWrapper">
        <h2>Art Spotlight</h2>

        <div id="highlight art 1" className="news" style={{ height: '250px', width: '250px' }}></div>
        <div id="hightlight art 2" className="news" style={{ height: '250px', width: '250px' }}></div>
        <div id="hightlight art 3" className="news" style={{ height: '250px', width: '250px' }}></div>
      </div>
    )
  }
}

export default HomeArt;
