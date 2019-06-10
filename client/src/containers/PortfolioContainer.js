import React from 'react';

import PortfolioArchive from '../components/PortfolioArchive';
// handles portfolio data
class PortfolioContainer extends React.Component {
  render() {
    return (
      <div className="container">
        Portfolio info goes here!!
        <PortfolioArchive />
      </div>
    )
  }
}

export default PortfolioContainer;
