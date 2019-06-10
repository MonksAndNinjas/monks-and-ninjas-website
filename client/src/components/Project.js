import React from 'react';

class Project extends React.Component {
  render() {
    console.log(this.props.projects, this.props.projectIndex)
    const renderProject = this.props.projects[this.props.projectIndex]

    return (
      <div className="projectWrapper">
        Project is displayed here!!

        <h2>Title: {renderProject.title}</h2>

        <p>Description: {renderProject.description}</p>

        <span>Date: {renderProject.date}</span>
      </div>
    )
  }
}

export default Project;
