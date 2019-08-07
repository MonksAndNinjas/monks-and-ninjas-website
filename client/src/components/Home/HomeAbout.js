import React from 'react';
// pic
import self_portrait_painting from '../../images/self_portrait_painting.jpg';
import portrait from '../../images/portraitJJimenez.svg';
// styling
import '../../css/homeAbout.css';

class HomeAbout extends React.Component {
  render() {

    const renderBio = this.props.profileData.bio
    const renderSummary = this.props.profileData.summary

    const renderTSkills = this.props.technicalSkills.map((skill, index) => (
      <li key={index}>{skill.name}</li>
    ));
    const renderMSkills = this.props.miscSkills.map((skill, index) => (
      <li key={index}>{skill.name}</li>
    ));

    const renderPhone = <p><span>Phone: </span>{this.props.resources[0]}</p>
    const renderGit = <span>GitHub: <a href={this.props.resources[2]}>MonksAndNinjas</a></span>
    const renderEmail = <span>Email: <a href={this.props.resources[1]}>{this.props.resources[1]}</a></span>

    //console.log(this.props.resources)

    return (
      <div id="homeAboutWrapper">
        <div id="bio">
          <h3>Bio</h3>
          {renderBio}
        </div>
        <div id="summary">
          <h3>Mission</h3>
          {renderSummary}
        </div>

        <div id="center">
          <div id="portrait">
            <img src={portrait} />
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
