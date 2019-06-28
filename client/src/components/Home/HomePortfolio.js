import React from 'react';
// generates random number within projects array length
import { makeRandomRange } from '../../helpers/makeRandomRange';
import { onClickAnimation } from '../../helpers/portfolioAnimation';
import { onCloseAnimation } from '../../helpers/portfolioAnimation';
// import images for project headers
import react from '../../images/react.png';
import rails from '../../images/RailsJS.png';
import sinatra from '../../images/sinatra.png';
import cli from '../../images/cli.png';
// styling
import '../../css/homePortfolio.css';
// handles portfolio data in Home page
class HomePortfolio extends React.Component {
  state = {
    projectImages: [cli, sinatra, rails, rails, react], // this should be moved to Rails CLI
  }
  // gathers necessary data fro animation
  gatherVariables = value => {
    var data = value.split(' ');
    var firstSide = document.getElementById(data[0]);
    var secondSide = document.getElementById(data[1]);
    var extraContent = secondSide.getElementsByClassName('projectContent')[0];
    var title = firstSide.getElementsByClassName('projectTitle')[0];
    var enlargeButton = secondSide.getElementsByClassName('projectExpand')[0];
    var closeButton = secondSide.getElementsByClassName('projectClose')[0];
    var image = firstSide.getElementsByClassName('projectPic')[0];
    var desc = firstSide.getElementsByClassName('projectDesc')[0];

    return [firstSide, secondSide, extraContent, title, enlargeButton, closeButton, image, desc];
  }

  handleClick = event => {
    event.preventDefault();
    event.persist();

    onClickAnimation(this.gatherVariables(event.target.value));
  }

  handleClose = event => {
    event.preventDefault();
    event.persist();

    onCloseAnimation(this.gatherVariables(event.target.value));
  }

  render() {

    const projectsArray = this.props.projects;
    const project1 = projectsArray[this.props.indexArray[0]];
    const project2 = projectsArray[this.props.indexArray[1]];
    //console.log(project1, project2)

    return (
      <div id="homePortfolioWrapper">
        <h2>Most Recent and project spotlight</h2>

        <div id="highlight-project-1" className="news">
          <div className="projectTitle">{project1.title}</div>
          <div className="projectlower">
            <div className="projectPic">
              <img src={this.state.projectImages[this.props.indexArray[0]]} alt={project1.title} />
              <div className="projectLinks">
                <a href={project1.github}>GitHub</a><br/>
                <a href={project1.video}>Demo</a><br/>
                <button className="projectExpand" value="highlight-project-2 highlight-project-1" onClick={event => this.handleClick(event)}>learn more</button>
                <button className="projectClose" value="highlight-project-2 highlight-project-1" onClick={event => this.handleClose(event)}>&times;</button>
              </div>
            </div>
            <div className="projectDesc">{project1.description}</div>
            <div className="projectContent">extra content!</div>
          </div>
        </div>

        <div id="highlight-project-2" className="news">
          <div className="projectTitle">{project2.title}</div>
          <div className="projectlower">
            <div className="projectPic">
                <img src={this.state.projectImages[this.props.indexArray[1]]} alt={project1.title} />
                <div className="projectLinks">
                  <a href={project2.github}>GitHub</a><br/>
                  <a href={project2.video}>Demo</a><br/>
                  <button className="projectExpand" value="highlight-project-1 highlight-project-2" onClick={event => this.handleClick(event)}>learn more</button>
                  <button className="projectClose" value="highlight-project-1 highlight-project-2" onClick={event => this.handleClose(event)}>&times;</button>
                </div>
            </div>
            <div className="projectDesc">{project2.description}</div>
            <div className="projectContent">extra content!</div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePortfolio;
