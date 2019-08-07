import React from 'react';
// displays resume
class ResumeViewer extends React.Component {
  constructor(props) {
    super(props);
    this.viewerRef = React.createRef();
    this.backend = new props.backend();
  }

  render() {
    return (
      <div ref={this.viewerRef} id='viewer' style={{ width: '100%', height: '100%' }}>

      </div>
    )
  }

  componentDidMount() {
    const { src } = this.props;
    const element = this.viewerRef.current;

    this.backend.init(src, element);
  }

}

export default ResumeViewer;
