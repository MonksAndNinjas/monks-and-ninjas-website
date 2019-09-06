import React from 'react';
import Iframe from '../Blog/Iframe'
// used for translating markdown code
const ReactMarkdown = require('react-markdown')
// renders post data passed down from blog container
class Blog extends React.Component {

  render() {

    const renderPost = this.props.posts[this.props.postIndex]
    const renderers: ReactMarkdown.Renderers = { blockquote: (props: string) => (<Iframe text={props} />)};
  //  console.log(renderPost.content)

    return(
      <div id="postWrapper">
        <h2>{renderPost.title}</h2>

        <ReactMarkdown source={renderPost.content}
          renderers={renderers} />
        <span style={{ 'color': 'grey'}}>Date Published: {renderPost.lastPublished}</span>
      </div>
    )
  }

  /*componentDidMount() {
    // move this to a function out of here
    // also need to use if statement to see if should to insert iframe
    // gather data
    let post = this.props.posts[this.props.postIndex];

    if (post.title === "CSS - Nuances in Backgrounds and Borders") {
      let wrapper = document.getElementById("postWrapper");
      let pre = wrapper.getElementsByTagName('pre');

      Array.from(pre).forEach((el) =>

        let innerHTML = el.innerText;
        let source = innerHTML.split('"true">')[0].split('src="')[1].split("frameborder")[0].split('"')[0];
        let index = innerHTML.split("data='")[1].split("'>")[0];
        let title = innerHTML.split("'>")[1].split("</a>")[0];
        let content = innerHTML.split('"true">')[1].split("</iframe>")[0];
        // iframe styling
        let iframe = document.createElement('iframe');
        iframe.height = '265';
        iframe.width = '100%';
        iframe.scrolling = 'no';
        iframe.title = title;
        iframe.src = source;
        iframe.frameBorder = 'no';
        iframe.allowTransparency = 'true';
        iframe.allowFullscreen = 'true';
        iframe.innerHTML = content;
        // raplace pre element with iframe element
        wrapper.replaceChild(iframe, wrapper.childNodes[index]);
      });
    };
  }*/

}

export default Blog;
