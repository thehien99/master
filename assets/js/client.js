const comMent = document.querySelector('.comment-highlight');
const cmtClient = comMent.querySelectorAll('.client');
let cmtIndex = 0;
function showClient(cmt) {
  cmtClient[cmtIndex].classList.remove('active');
  cmtIndex += cmt;
  if (cmtIndex === -1) {
    cmtIndex = cmtClient.length - 1;
  }
  if (cmtIndex == cmtClient.length) {
    cmtIndex = 0;
  }
  cmtClient[cmtIndex].classList.add('active');
}
setInterval(() => {
  showClient(1)
}, 4000);