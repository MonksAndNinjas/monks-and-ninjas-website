// call backs for toggling display
// call back function 1 from
function cb (el) {
  el.style.display = 'none';
}
// call back function 2 from
function cb2 (el, el2) => {
  el.style.display = 'none';
  el2.classList.add("reverse-animation");
  el2.style.display = 'block';
}
// call back function 3 from
function cb3 (el, el2, el3, el4) => {
  el.style.display = 'none';
  el2.style.display = 'inline-block';
  el3.style.display = 'inline-block';
  el4.style.display = 'inline-block';

  what2.classList.add("reverse-animation");
  what3.classList.add("reverse-animation");
  what4.classList.add("reverse-animation");
}
// animation functions
// displays single post and removes highlight posts
export const onClickAnimation = () =>  {
  var postModal = document.getElementById('viewPostWrapper')
  var highlight1 = document.getElementById('highlight-post-1')
  var highlight2 = document.getElementById('highlight-post-2')
  var highlight3 = document.getElementById('highlight-post-3')
  // remove listener
  postModal.removeEventListener("animationend", this.a4)
  // add listeners
  highlight1.addEventListener("animationend", cb(highlight1))
  highlight2.addEventListener("animationend", cb(highlight2))
  highlight3.addEventListener("animationend", cb2(highlight3, postModal))
  // add animation
  highlight1.classList.add("run-animation")
  highlight2.classList.add("run-animation")
  highlight3.classList.add("run-animation")
}
// displays highlight posts and removes single post
export const onCloseAnimation = () => {
  var postModal = document.getElementById('viewPostWrapper')
  var highlight1 = document.getElementById('highlight-post-1')
  var highlight2 = document.getElementById('highlight-post-2')
  var highlight3 = document.getElementById('highlight-post-3')
  // remove listeners
  highlight1.removeEventListener("animationend", this.a1)
  highlight2.removeEventListener("animationend", this.a1)
  highlight3.removeEventListener("animationend", this.a2)
  // add listener
  postModal.classList.remove("reverse-animation")
  highlight1.classList.remove("run-animation")
  highlight2.classList.remove("run-animation")
  highlight3.classList.remove("run-animation")
  // triggering reflow so animation can start again
  void postModal.offsetWidth;
  void highlight1.offsetWidth;
  void highlight2.offsetWidth;
  void highlight3.offsetWidth;

  postModal.addEventListener("animationend", cb3(postModal, highlight1, highlight2, highlight3))

  postModal.classList.add("run-animation")
}
