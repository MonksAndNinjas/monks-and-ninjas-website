import React from 'react';

import ProjectArchive from '../components/ProjectArchive';
import Project from '../components/Project';
// handles portfolio data
class PortfolioContainer extends React.Component {
  render() {
    return (
      <div className="container">
        Portfolio info goes here!!
        <ProjectArchive />
        <Project />
      </div>
    )
  }
}

export default PortfolioContainer;
