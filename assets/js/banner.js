// const navBanner = document.querySelector('.nav-banner');
// const bannerImg = navBanner.querySelectorAll('img');
// let imgIndex = 0;
// function showBanner() {
//   for (let i = 0; i < bannerImg.length; i++) {
//     bannerImg[i].style.display = 'none';
//   }
//   imgIndex++;
//   if (imgIndex > bannerImg.length) {
//     imgIndex = 1;
//   }
//   bannerImg[imgIndex - 1].style.display = 'block';
//   setTimeout(showBanner, 1000);
// }
// showBanner();
const navBanner = document.querySelector('.nav-banner');
const slideAll = navBanner.querySelectorAll('.slide');
let slideIndex = 0;
function showSlide(page) {
  slideAll[slideIndex].classList.remove('active');
  slideIndex += page;
  if (slideIndex === -1) {
    slideIndex = slideAll.length - 1;
  }
  if (slideIndex == slideAll.length) {
    slideIndex = 0;
  }

  slideAll[slideIndex].classList.add('active');
}
setInterval(() => {
  showSlide(1)
}, 1000);