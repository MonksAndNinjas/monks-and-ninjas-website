import React from 'react';

class ProjectArchive extends React.Component {

  handleClick = event => {
    event.preventDefault();
    // sets postIndex state and then changes styling of selected post to signify active
    this.props.displayProject(event.target.value);
    this.props.changeStyle(event.target.value);
  }

  render() {

    const renderProjects = this.props.projects.map((project, index) => (
      <ul id={`project-${index}`} key={index}>
        <button value={index} onClick={event => this.handleClick(event)}>{project.title}</button>
      </ul>
    ));

    return (
      <div className="projectArchiveWrapper">
        Portfolio Archive goes here!

        {renderProjects}
      </div>
    )
  }
}

export default ProjectArchive;
