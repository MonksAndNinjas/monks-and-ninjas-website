import React from 'react';
// renders viewer to display resume
import ResumeViewer from '../components/Resume/ResumeViewer';
import PDFJSBackend from '../helpers/pdfjs';
// styling
import '../css/resumeContainer.css';

class ResumeContainer extends React.Component {
  render() {
    return (
      <div id="resumeViewer" className="container">
        <ResumeViewer backend={PDFJSBackend} src='/resume.pdf'/>
      </div>
    )
  }
}

export default ResumeContainer;
