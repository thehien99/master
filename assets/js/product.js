const btns = document.querySelectorAll('button');

function activeContentTab(target){
    const tabActiveElement = document.querySelector('.row-car.active');
    tabActiveElement.classList.remove('active');

    const activeTab = document.querySelector(target);
    activeTab.classList.add('active');

}
function handleChangeTab(btn){
    const activeElement = document.querySelector('button.active');
    activeElement.classList.remove('active');

    const dataTabActive = btn.getAttribute('data-IdTab');
    activeContentTab(dataTabActive);

    btn.classList.add('active');
}
for(const tabBtn of btns){
    tabBtn.addEventListener('click', ()=>{
        handleChangeTab(tabBtn);
    });
}
