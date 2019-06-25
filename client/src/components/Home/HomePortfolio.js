import React from 'react';
// generates random number within projects array length
import { makeRandomRange } from '../../helpers/makeRandomRange';
// import images for project headers
import react from '../../images/react.png';
import rails from '../../images/RailsJS.png';
import sinatra from '../../images/sinatra.png';
import cli from '../../images/cli.png';
// handles portfolio data in Home page
class HomePortfolio extends React.Component {
  state = {
    projectImages: [cli, sinatra, rails, rails, react], // this should be moved to Rails CLI
  }

  handleClick = event => {
    event.preventDefault();
    event.persist();

    var value = event.target.value.split(' ');
    var index = value[0];
    var removeProjectId = value[1];
    var enlargeProjectId = value[2];
    var removeSide = document.getElementById(removeProjectId);
    var enlargeSide = document.getElementById(enlargeProjectId);
    var enlargeButton = enlargeSide.getElementsByClassName('projectExpand')[0];
    var closeButton = document.getElementsByClassName('projectClose')[0];
    console.log(enlargeButton, closeButton)

    removeSide.style.display = 'none';
    enlargeButton.style.display = 'none';
    closeButton.style.display = 'block';
    enlargeSide.style.width = '1000px';
  }

  render() {

    const projectsArray = this.props.projects;
    const project1 = projectsArray[this.props.indexArray[0]];
    const project2 = projectsArray[this.props.indexArray[1]];
    console.log(projectsArray)

    return (
      <div id="homePortfolioWrapper">
        <h2>Most Recent and project spotlight</h2>

        <div id="highlight-project-1" className="news">
          <div className="projectTitle">{project1.title}</div>
          <div className="lower">
            <div className="projectPic">
              <img src={this.state.projectImages[this.props.indexArray[0]]} alt={project1.title} />
                <button className="projectExpand" value={`${this.props.indexArray[0]} highlight-project-2 highlight-project-1`} onClick={event => this.handleClick(event)}>learn more</button>
                <button className="projectClose">&times;</button>
            </div>
            <div className="projectDesc">{project1.description}</div>
          </div>
        </div>

        <div id="highlight-project-2" className="news">
          <div className="projectTitle">{project2.title}</div>
          <div className="lower">
            <div className="projectPic">
                <img src={this.state.projectImages[this.props.indexArray[1]]} alt={project1.title} />
                <button className="projectExpand" value={`${this.props.indexArray[1]} highlight-project-1 highlight-project-2`} onClick={event => this.handleClick(event)}>learn more</button>
                <button className="projectClose">&times;</button>
            </div>
            <div className="projectDesc">{project2.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePortfolio;
