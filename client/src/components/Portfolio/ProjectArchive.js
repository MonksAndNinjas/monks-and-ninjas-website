import React from 'react';
// renders all projects
class ProjectArchive extends React.Component {

  handleClick = event => {
    event.preventDefault();
    let target = (event.target.value) ? event.target.value : event.target.id
    // sets postIndex state and then changes styling of selected post to signify active
    this.props.displayProject(target);
    this.props.changeStyle(target);
  }

  render() {

    const renderProjects = this.props.projects.map((project, index) => (
      <ul id={`project-${index}`} key={index}>
        <button value={index} onClick={event => this.handleClick(event)}>
          <img id={index} src={this.props.images[index]} alt={project.title} />

          <br/><br/>

          {project.title}
        </button>
      </ul>
    ));

    return (
      <div className="projectArchiveWrapper">
        {renderProjects}
      </div>
    )
  }
  // designates active project, changes class to apply css to it
  componentDidMount() {
    var buttonActive = document.querySelectorAll('button')[0]

    buttonActive.setAttribute("class", "activeProject");
  }

}

export default ProjectArchive;
