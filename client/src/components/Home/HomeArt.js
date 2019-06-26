import React from 'react';
// generates random number within projects array length
import { makeRandomRange } from '../../helpers/makeRandomRange';
import { onClickAnimation } from '../../helpers/artAnimation';
import { onCloseAnimation } from '../../helpers/artAnimation';
// handles art data in Home page
class HomeArt extends React.Component {
  state = {
    artIndex: '0'
  }

  handleClick = event => {
    event.preventDefault();
    event.persist();

    var value = event.target.attributes[0].value;

    this.setState({ artIndex: value })

    var removeImg1 = document.getElementById('highlight-art-1');
    var removeImg2 = document.getElementById('highlight-art-2');
    var removeImg3 = document.getElementById('highlight-art-3');
    var artContent = document.getElementById('viewArtWrapper')

    removeImg1.style.display = 'none';
    removeImg2.style.display = 'none';
    removeImg3.style.display = 'none';
    artContent.style.display = 'inline-flex';
  }
  // closes individual blog post
  handleClose = event => {
    event.preventDefault();

    var removeImg1 = document.getElementById('highlight-art-1');
    var removeImg2 = document.getElementById('highlight-art-2');
    var removeImg3 = document.getElementById('highlight-art-3');
    var artContent = document.getElementById('viewArtWrapper')

    removeImg1.style.display = 'inline-table';
    removeImg2.style.display = 'inline-table';
    removeImg3.style.display = 'inline-table';
    artContent.style.display = 'none';
  }

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
          <button onClick={event => this.handleClick(event)}>
            <img value={this.props.indexArray[0]} src={pic1.download_url} alt="artwork" />
            <div className="middleArt">
              <div className="textArt">
                <span>{this.parseTitle(pic1.name)}</span>
              </div>
            </div>
          </button>
        </div>

        <div id="highlight-art-2" className="news">
          <button onClick={event => this.handleClick(event)}>
            <img value={this.props.indexArray[1]} src={pic2.download_url} alt="artwork" />
            <div className="middleArt">
              <div className="textArt">
                <span>{this.parseTitle(pic2.name)}</span>
              </div>
            </div>
          </button>
        </div>

        <div id="highlight-art-3" className="news">
          <button onClick={event => this.handleClick(event)}>
            <img value={this.props.indexArray[2]} src={pic3.download_url} alt="artwork" />
            <div className="middleArt">
              <div className="textArt">
                <span>{this.parseTitle(pic3.name)}</span>
              </div>
            </div>
          </button>
        </div>

        <div id="viewArtWrapper">
          <img src={this.props.photosArray[this.state.artIndex].download_url} alt={this.props.photosArray[this.state.artIndex].name} />
          <button className="artClose" onClick={event => this.handleClose(event)}>&times;</button>
          <div id="viewArt"><p>Title: {this.parseTitle(this.props.photosArray[this.state.artIndex].name)}</p></div>
        </div>
      </div>
    )
  }
}

export default HomeArt;
