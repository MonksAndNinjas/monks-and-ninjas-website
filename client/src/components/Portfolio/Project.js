import React from 'react';
// renders selected project
class Project extends React.Component {
  render() {

    const renderProject = this.props.projects[this.props.projectIndex]

    return (
      <div className="projectWrapper">
        <h2>{renderProject.title}</h2>

        <p>{renderProject.description}</p>

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
