import React from 'react';

class Iframe extends React.Component {

  render() {

    const string = this.props.text.children[0].props.value;
    const iframeData = string.split('<iframe')[1].split('>')[0];
    const title = iframeData.split('title="')[1].split('" src')[0];
    const source = iframeData.split('src="')[1].split('"')[0];

    console.log(string);

    return(
      <div className="codePenWrapper">
        <iframe title={title} src={source} height="265" width="100%" scrolling="no" frameBorder="no" allowtransparency="true" allowFullScreen={true}>

        </iframe>
      </div>
    )
  }
}

export default Iframe;
