import React from 'react';
// generates random number within projects array length
import { makeRandomRange } from '../../helpers/makeRandomRange';
// handles portfolio data in Home page
class HomePortfolio extends React.Component {
  render() {

    const projectsArray = this.props.projects;
    const project1 = projectsArray[this.props.indexArray[0]];
    const project2 = projectsArray[this.props.indexArray[1]];
    console.log(project1, project2)

    return (
      <div id="homePortfolioWrapper">
        <h2>Most Recent and project spotlight</h2>

        <div id="highlight-project-1" className="news">
          <div className="projectTitle">{project1.title}</div>
          <div className="lower">
            <div className="projectPic">Pic goes here</div>
            <div className="projectDesc">Description goes here!</div>
          </div>
        </div>

        <div id="highlight-project-2" className="news">
          <div className="projectTitle">{project2.title}</div>
          <div className="lower">
            <div className="projectPic">Pic goes here</div>
            <div className="projectDesc">Description goes here!</div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePortfolio;
