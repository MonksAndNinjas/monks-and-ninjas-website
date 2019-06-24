import React from 'react';
// generates random number within projects array length
import { makeRandomRange } from '../../helpers/makeRandomRange';
// handles art data in Home page
class HomeArt extends React.Component {
  render() {

    const photoArray = this.props.photosArray;
    const pic1 = photoArray[this.props.indexArray[0]].download_url;
    const pic2 = photoArray[this.props.indexArray[1]].download_url;
    const pic3 = photoArray[this.props.indexArray[2]].download_url;
    console.log(pic1, pic2, pic3)

    return (
      <div id="homeArtWrapper">
        <h2>Art Spotlight</h2>

        <div id="highlight-art-1" className="news"><img src={pic1} alt="artwork" /></div>
        <div id="highlight-art-2" className="news"><img src={pic2} alt="artwork" /></div>
        <div id="highlight-art-3" className="news"><img src={pic3} alt="artwork" /></div>
      </div>
    )
  }
}

export default HomeArt;
