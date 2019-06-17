import React from 'react';

class HomePortfolio extends React.Component {
  render() {
    return (
      <div id="homePortfolioWrapper">
        <h2>Most Recent and project spotlight</h2>
        <div id="mostRecent project" className="news" style={{ height: '250px', width: '250px' }}></div>
        <div id="project hightlight" className="news" style={{ height: '250px', width: '250px' }}></div>
      </div>
    )
  }
}

export default HomePortfolio;
