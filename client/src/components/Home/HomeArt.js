import React from 'react';
// generates random number within projects array length
import { makeRandomRange } from '../../helpers/makeRandomRange';
// handles art data in Home page
class HomeArt extends React.Component {

  parseTitle = titleData => {
    // string array
    let sArray = titleData.split("-");
    let sLength = sArray.length
    // last word of string isolated and .jpg removed
    let lastWord = sArray[sLength - 1].split(".jpg")[0]
    // string without the last word
    let partialString = sArray.slice(0, sLength - 1).join(" ")
    // combined strings
    let titleRaw = `${partialString} ${lastWord}`
    // capitalizes first letter of every word
    let title = titleRaw.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

    return title
  }

  render() {

    const photoArray = this.props.photosArray;
    const pic1 = photoArray[this.props.indexArray[0]];
    const pic2 = photoArray[this.props.indexArray[1]];
    const pic3 = photoArray[this.props.indexArray[2]];
  //  console.log(pic1, pic2, pic3)

    return (
      <div id="homeArtWrapper">
        <h2>Art Spotlight</h2>

        <div id="highlight-art-1" className="news">
          <button>
            <img src={pic1.download_url} alt="artwork" />
            <div className="middleArt">
              <div className="textArt">
                <span>{this.parseTitle(pic1.name)}</span>
              </div>
            </div>
          </button>
        </div>

        <div id="highlight-art-2" className="news">
          <button>
            <img src={pic2.download_url} alt="artwork" />
            <div className="middleArt">
              <div className="textArt">
                <span>{this.parseTitle(pic2.name)}</span>
              </div>
            </div>
          </button>
        </div>

        <div id="highlight-art-3" className="news">
          <button>
            <img src={pic3.download_url} alt="artwork" />
            <div className="middleArt">
              <div className="textArt">
                <span>{this.parseTitle(pic3.name)}</span>
              </div>
            </div>
          </button>
        </div>
      </div>
    )
  }
}

export default HomeArt;


/*  <button onClick={event => this.handleClick(event)}>
    <img id={index} value={`${this.props.type}-${index}`} src={photo.download_url} alt={photo.name} />
    <div className="middle">
      <div className="text">
        <span>{this.parseTitle(photo.name)}</span>
      </div>
    </div>
  </button>*/
