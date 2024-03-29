import React from 'react';
// imports project components
import ProjectArchive from '../components/Portfolio/ProjectArchive';
import Project from '../components/Portfolio/Project';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
// import images for project headers
import react from '../images/react.png';
import rails from '../images/RailsJS.png';
import sinatra from '../images/sinatra.png';
import cli from '../images/cli.png';
// should projects be displayed?
import { displayProjects } from '../helpers/displayContent';

import '../css/projectContainer.css';
// handles portfolio data
class PortfolioContainer extends React.Component {

  state = {
    projectImages: [cli, sinatra, rails, rails, react], // this should be moved to Rails CLI
    projectIndex: 0        // index of project to be displayed, default is most recent post
  }
  // sets state of post to display
  displayProject = (index) => {
    this.setState({ projectIndex: index })
  }
  // changes styling of button to signify that post was selected and displayed
  changeStyle = (index) => {
    var buttonActive = document.querySelectorAll('button')[index]
    var buttonPrev = document.querySelectorAll('button')[this.state.projectIndex]

    if (index !== this.state.projectIndex) {
      buttonActive.setAttribute("class", "activeProject");
      buttonPrev.removeAttribute("class")
    }
  }

  render() {

    console.log(this.props.projectsData)
    return (
      <div className="container">
        <h1>Portfolio</h1>

        { displayProjects(this.props.projectsData) ? (
            <div className="portfolioWrapper">
              <ProjectArchive images={this.state.projectImages} changeStyle={this.changeStyle} displayProject={this.displayProject} projects={this.props.projectsData.projects} />
              <Project projectIndex={this.state.projectIndex} projects={this.props.projectsData.projects}/>
            </div>
          ) : (
            null
        )}
      </div>
    )
  }
}
// makes projects data from store accessable
const mapStateToProps = state => {
  return({
    projectsData: state.projects
  })
}

export default connect(mapStateToProps)(PortfolioContainer);
