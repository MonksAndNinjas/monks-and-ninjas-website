import React from 'react';
// imports project components
import ProjectArchive from '../components/ProjectArchive';
import Project from '../components/Project';
// connects to store and allows use of functions in /actions
import { connect } from 'react-redux';
// handles portfolio data
class PortfolioContainer extends React.Component {
  render() {
    return (
      <div className="container">
        Portfolio info goes here!!
        <ProjectArchive projects={this.props.projects.projects} />
        <Project />
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
