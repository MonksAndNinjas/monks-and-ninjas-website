import React from 'react';
// pulls codepen iframe data in string form from blog and turns it into iframe tag
class CodePen extends React.Component {

  render() {

    const data = this.props.data.children[0].props.children;
    const iframeData = data[0].props.value.split(' -');
    const title = iframeData[0];
    const source = iframeData[1];
    const visitPen = data[1].props.href;
    //console.log(title, source, visitPen);

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
