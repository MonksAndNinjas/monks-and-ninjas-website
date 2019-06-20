import React from 'react';
// generates random number within projects array length
import { makeRandomRange } from '../../helpers/makeRandomRange';
// handles portfolio data in Home page
class HomePortfolio extends React.Component {
  render() {

    console.log(this.props.indexArray)

    return (
      <div id="homePortfolioWrapper">
        <h2>Most Recent and project spotlight</h2>
        <div id="highlight-project-1" className="news">
          <div className="projectTitle">Project 1</div>
          <div className="projectPic">Pic goes here</div>
          <div className="projectDesc">Desc goes here</div>
        </div>

        <div id="highlight-project-2" className="news">
          <div className="projectTitle">Project 2</div>
          <div className="projectPic">Pic goes here</div>
          <div className="projectDesc">Desc goes here</div>
        </div>
      </div>
    )
  }
}

export default HomePortfolio;
