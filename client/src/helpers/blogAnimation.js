// array = [postModal, highlight1, highlight2, highlight3]
// call backs for toggling display
// call back function 1 from onClickAnimation
function cb (el) {
  setTimeout(function() {
    el.style.display = 'none';
  }, 600); // .6 seconds
}
// call back function 2 from onClickAnimation
function cb2 (el, el2) {
  setTimeout(function() {
    el.style.display = 'none';
    el2.classList.add("reverse-animation");
    el2.style.display = 'block';
  }, 600); // .6 seconds
}
// call back function 3 from onCloseAnimation
function cb3 (array) {
  setTimeout(function() {
    array[0].style.display = 'none';
    array[1].style.display = 'inline-block';
    array[2].style.display = 'inline-block';
    array[3].style.display = 'inline-block';

    array[1].classList.add("reverse-animation");
    array[2].classList.add("reverse-animation");
    array[3].classList.add("reverse-animation");
  }, 600); // .6 seconds
}
//remove animation class
function removeClass (array, class1, class2) {
  // remove animation class
  array[0].classList.remove(class1);
  array[1].classList.remove(class2);
  array[2].classList.remove(class2);
  array[3].classList.remove(class2);
  // triggering reflow so animation can start again
  void array[0].offsetWidth;
  void array[1].offsetWidth;
  void array[2].offsetWidth;
  void array[3].offsetWidth;
}
// animation functions
// displays single post and removes highlight posts
export const onClickAnimation = (array) =>  {
  // remove listener
  array[0].removeEventListener("animationend", cb3)

  removeClass(array, "run-animation", "reverse-animation")
  // add listeners
  array[1].addEventListener("animationend", cb(array[1]))
  array[2].addEventListener("animationend", cb(array[2]))
  array[3].addEventListener("animationend", cb2(array[3], array[0]))
  // add animation
  array[1].classList.add("run-animation")
  array[2].classList.add("run-animation")
  array[3].classList.add("run-animation")
}
// displays highlight posts and removes single post
export const onCloseAnimation = (array) => {
  // remove listeners
  array[1].removeEventListener("animationend", cb)
  array[2].removeEventListener("animationend", cb)
  array[3].removeEventListener("animationend", cb2)

  removeClass(array, "reverse-animation", "run-animation")
  // add listener
  array[0].addEventListener("animationend", cb3(array))

  array[0].classList.add("run-animation")
}
