import React from 'react';
// styling
import '../../css/homeAbout.css';

class HomeAbout extends React.Component {
  render() {

    const renderBio = this.props.profileData.bio
    const renderSummary = this.props.profileData.summary
    const a = ["Phone", "Email", "Github"]

    const renderTSkills = this.props.technicalSkills.map((skill, index) => (
      <li key={index}>{skill.name}</li>
    ));
    const renderMSkills = this.props.miscSkills.map((skill, index) => (
      <li key={index}>{skill.name}</li>
    ));
  //  const renderResources = this.props.resources.map((resource, index) => (
    //  <p key={index}><span>{a[index]}: </span>{resource}</p>
    //));

    const renderPhone = <p><span>Phone: </span>{this.props.resources[0]}</p>
    const renderGit = <span>GitHub: <a href={this.props.resources[1]}>MonksAndNinjas</a></span>
    const renderEmail = <span>Email: <a href={this.props.resources[2]}>{this.props.resources[2]}</a></span>

    return (
      <div id="homeAboutWrapper">
        <div id="bio">
          <h3>Bio</h3>
          {renderBio}
        </div>
        <div id="summary">
          <h3>Summary</h3>
          {renderSummary}
        </div>

        <div className="skills">
          <div id="tskill">
            <h3>Technical Skills</h3>
            <ul>{renderTSkills}</ul>
          </div>
          <div id="mskill">
            <h3>Other Skills</h3>
            <ul>{renderMSkills}</ul>
          </div>
        </div>

        <div id="contact">
          <h3>Resources</h3>
          {renderPhone}
          {renderEmail}

          <br/><br/>

          {renderGit}
        </div>
      </div>
    )
  }
}

export default HomeAbout;
