const headerScroll = document.querySelector('.header');
const headingScroll = document.querySelector('.heading');
let clickbtn = document.querySelector('#btn-clicktop');
window.onscroll = () => { scrollHeader() };
function scrollHeader() {
  if (document.documentElement.scrollTop > 90 || document.body.scrollTop > 90) {
    headerScroll.style.display = 'none';
    headingScroll.style.position = 'fixed';
    headingScroll.style.top = 0;
    headingScroll.style.zIndex = 9;
    clickbtn.style.display = 'block';
  } else {
    clickbtn.style.display = 'none';
    headerScroll.style.display = 'block';
    headingScroll.style.position = 'relative';
  }

}

function clickOntop() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
}