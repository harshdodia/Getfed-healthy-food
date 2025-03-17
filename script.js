const bar = document.getElementsByClassName('bar');
const close = document.getElementsByClassName('close');
const nav = document.querySelector('.nav-links');

if(bar){
    bar.addEventListener('click', () => {
    nav.classList.add('add');
});
}

if(colse){
    close.addEventListener('click', () => {
    nav.classList.remove('add');
});
}