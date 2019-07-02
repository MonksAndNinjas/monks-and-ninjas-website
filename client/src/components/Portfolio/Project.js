import React from 'react';
// renders selected project
class Project extends React.Component {
  render() {

    const renderProject = this.props.projects[this.props.projectIndex][0]
    const renderNotes = this.props.projects[this.props.projectIndex][1].map((note, index) => (
      <p key={index}>{note.summary}</p>
    ));

    return (
      <div className="projectWrapper">
        <h2>{renderProject.title}</h2>

        <p>{renderProject.description}</p>

        {renderNotes}

        <span><a href={renderProject.github}>View Code on GitHub</a></span>

        <br/><br/>

        <iframe title={renderProject.title} width="560" height="315" src={`https://www.youtube.com/embed/${renderProject.embed}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

        <br/><br/>

        <span style={{ color: 'grey' }}>Date: {renderProject.date}</span>
      </div>
    )
  }
}

export default Project;
