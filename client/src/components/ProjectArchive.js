import React from 'react';

class ProjectArchive extends React.Component {
  render() {

    const renderProjects = this.props.projects.map((project, index) => {
      <ul id={`project-${index}`} key={index}>
        <button value={index} onClick={event => this.handleClick(event)}>{project.title}</button>
      </ul>
    });

    return (
      <div className="projectArchiveWrapper">
        Portfolio Archive goes here!
      </div>
    )
  }
}

export default ProjectArchive;
