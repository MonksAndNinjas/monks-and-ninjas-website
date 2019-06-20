import React from 'react';

import { makeRandomRange } from '../../helpers/makeRandomRange';

class HomePortfolio extends React.Component {
  render() {
    
    var generate = makeRandomRange(this.props.projects.length)
    var x1 = generate(),
        x2 = generate();
    //console.log(x1, x2)

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
