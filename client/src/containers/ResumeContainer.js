import React from 'react';
// renders viewer to display resume
import ResumeViewer from '../components/Resume/ResumeViewer';

class ResumeContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <ResumeViewer />
      </div>
    )
  }
}

export default ResumeContainer;
