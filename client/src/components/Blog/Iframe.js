import React from 'react';
// pulls codepen iframe data in string form and turns it into iframe tag
class Iframe extends React.Component {

  render() {

    const string = this.props.text.children[0].props.value;
    const iframeData = string.split('<iframe')[1].split('>')[0];
    const title = iframeData.split('title="')[1].split('" src')[0];
    const source = iframeData.split('src="')[1].split('"')[0];
    const visitPen = string.split('result">')[1].split("href='")[1].split("'>");

    //console.log(string);

    return(
      <div className="codePenWrapper">
        <iframe title={title} src={source} height="400" width="100%" scrolling="no" frameBorder="no" allowtransparency="true" allowFullScreen={true}>
          See the Pen (
            <a href={visitPen}>{title}</a>
            by MonksAndNinjas
            <a href="https://codepen.io/monksandninjas">@monksandninjas</a>
          ) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
    )
  }
}

export default Iframe;
