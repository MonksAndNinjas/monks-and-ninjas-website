import React from 'react';

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
    const renderResources = this.props.resources.map((resource, index) => (
      <li key={index}>{resource}</li>
    ));

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
        <div id="tskill">
          <h3>Technical Skills</h3>
          <ul>{renderTSkills}</ul>
        </div>
        <div id="mskill">
          <h3>Other Skills</h3>
          <ul>{renderMSkills}</ul>
        </div>
        <div id="contact">
          <h3>Resources</h3>
          <ul>{renderResources}</ul>
        </div>
      </div>
    )
  }
}

export default HomeAbout;
