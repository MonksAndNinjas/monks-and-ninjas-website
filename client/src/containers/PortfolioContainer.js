import React from 'react';
// imports project components
import ProjectArchive from '../components/ProjectArchive';
import Project from '../components/Project';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
// handles portfolio data
class PortfolioContainer extends React.Component {

  state = {
    projectIndex: 0        // index of project to be displayed, default is most recent post
  }
  // should project be displayed?
  displayProjects = () => {
    let projects = this.props.projects
    let projectsSize = this.props.projects.projects.length

    return (projects !== undefined && projectsSize > 0 && projects.loading === false)
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
    return (
      <div className="container">
        Portfolio info goes here!!

        { this.displayProjects() ? (
            <div className="portfolioWrapper">
              <ProjectArchive changeStyle={this.changeStyle} displayProject={this.displayProject} projects={this.props.projects.projects} />
              <Project projectIndex={this.state.projectIndex} projects={this.props.projects.projects}/>
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
    projects: state.projects
  })
}

export default connect(mapStateToProps)(PortfolioContainer);
