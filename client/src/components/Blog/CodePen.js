import React from 'react';
// pulls codepen iframe data in string form and turns it into iframe tag
class CodePen extends React.Component {

  render() {

    const data = this.props.data.children[0].props.value;
    const iframeData = data.split('<iframe')[1].split('>')[0];
    const title = iframeData.split('title="')[1].split('" src')[0];
    const source = iframeData.split('src="')[1].split('"')[0];
    const visitPen = data.split('result">')[1].split("href='")[1].split("'>");

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

export default CodePen;
