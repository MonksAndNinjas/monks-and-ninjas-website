import React from 'react';
// generates random number within projects array length
import { makeRandomRange } from '../../helpers/makeRandomRange';
import { onClickAnimation } from '../../helpers/artAnimation';
import { onCloseAnimation } from '../../helpers/artAnimation';
import { artMove } from '../../helpers/artAnimation';
import { parseTitle } from '../../helpers/parseTitle';
// styling
import '../../css/homeArt.css';
// handles art data in Home page
class HomeArt extends React.Component {
  state = {
    artIndex: '0'
  }

  gatherVariables = () => {
    var highlightImg1 = document.getElementById('highlight-art-1');
    var highlightImg2 = document.getElementById('highlight-art-2');
    var highlightImg3 = document.getElementById('highlight-art-3');
    var artContent = document.getElementById('viewArtWrapper')

    return [highlightImg1, highlightImg2, highlightImg3, artContent];
  }

  handleClick = event => {
    event.preventDefault();
    event.persist();

    if (event.target.attributes[0]) {
      var value = event.target.attributes[0].value.split('-');
      var index = value[0]

      this.setState({ artIndex: index })

      onClickAnimation(this.gatherVariables());
    }
  }
  // closes individual blog post
  handleClose = event => {
    event.preventDefault();

    onCloseAnimation(this.gatherVariables());
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
            <img value={`${this.props.indexArray[0]}`} src={pic1.download_url} alt="artwork" />
            <div className="middleArt">
              <div className="textArt">
                <span>{parseTitle(pic1.name)[0]}</span>
              </div>
            </div>
          </button>
        </div>

        <div id="highlight-art-2" className="news">
          <button onClick={event => this.handleClick(event)}>
            <img value={`${this.props.indexArray[1]}`} src={pic2.download_url} alt="artwork" />
            <div className="middleArt">
              <div className="textArt">
                <span>{parseTitle(pic2.name)[0]}</span>
              </div>
            </div>
          </button>
        </div>

        <div id="highlight-art-3" className="news">
          <button onClick={event => this.handleClick(event)}>
            <img value={`${this.props.indexArray[2]}`} src={pic3.download_url} alt="artwork" />
            <div className="middleArt">
              <div className="textArt">
                <span>{parseTitle(pic3.name)[0]}</span>
              </div>
            </div>
          </button>
        </div>

        <div id="viewArtWrapper">
          <img src={this.props.photosArray[this.state.artIndex].download_url} alt={this.props.photosArray[this.state.artIndex].name} />
          <button className="artClose" onClick={event => this.handleClose(event)}>&times;</button>
          <div id="viewArt">
            <p>Title: {parseTitle(this.props.photosArray[this.state.artIndex].name)[0]}</p>
            <p>Category: {parseTitle(this.props.photosArray[this.state.artIndex].name)[1]}</p>
            <p>Medium: {parseTitle(this.props.photosArray[this.state.artIndex].name)[2]}</p>
            <p>Dimensions: {parseTitle(this.props.photosArray[this.state.artIndex].name)[3]}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeArt;
