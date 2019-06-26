import React from 'react';
// generates random number within projects array length
import { makeRandomRange } from '../../helpers/makeRandomRange';
import { onClickAnimation } from '../../helpers/artAnimation';
import { onCloseAnimation } from '../../helpers/artAnimation';
import { parseTitle } from '../../helpers/parseTitle';
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

    onClickAnimation();
  }
  // closes individual blog post
  handleClose = event => {
    event.preventDefault();

    onCloseAnimation();
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
                <span>{parseTitle(pic1.name)}</span>
              </div>
            </div>
          </button>
        </div>

        <div id="highlight-art-2" className="news">
          <button onClick={event => this.handleClick(event)}>
            <img value={this.props.indexArray[1]} src={pic2.download_url} alt="artwork" />
            <div className="middleArt">
              <div className="textArt">
                <span>{parseTitle(pic2.name)}</span>
              </div>
            </div>
          </button>
        </div>

        <div id="highlight-art-3" className="news">
          <button onClick={event => this.handleClick(event)}>
            <img value={this.props.indexArray[2]} src={pic3.download_url} alt="artwork" />
            <div className="middleArt">
              <div className="textArt">
                <span>{parseTitle(pic3.name)}</span>
              </div>
            </div>
          </button>
        </div>

        <div id="viewArtWrapper">
          <img src={this.props.photosArray[this.state.artIndex].download_url} alt={this.props.photosArray[this.state.artIndex].name} />
          <button className="artClose" onClick={event => this.handleClose(event)}>&times;</button>
          <div id="viewArt"><p>Title: {parseTitle(this.props.photosArray[this.state.artIndex].name)}</p></div>
        </div>
      </div>
    )
  }
}

export default HomeArt;
