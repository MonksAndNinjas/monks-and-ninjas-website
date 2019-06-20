import React from 'react';

import { makeRandomRange } from '../../helpers/makeRandomRange';

class HomeArt extends React.Component {
  render() {

      const photoArray = [...this.props.photos.drawings, ...this.props.photos.signature, ...this.props.photos.digital, ...this.props.photos.paintings]
      var generate = makeRandomRange(photoArray.length)
      var x1 = generate(),
          x2 = generate(),
          x3 = generate();
      //console.log(x1, x2, x3)

    return (
      <div id="homeArtWrapper">
        <h2>Art Spotlight</h2>

        <div id="highlight-1" className="news"><img src={photoArray[x1].download_url} alt="artwork" /></div>
        <div id="hightlight-2" className="news"><img src={photoArray[x2].download_url} alt="artwork" /></div>
        <div id="hightlight-3" className="news"><img src={photoArray[x3].download_url} alt="artwork" /></div>
      </div>
    )
  }
}

export default HomeArt;
