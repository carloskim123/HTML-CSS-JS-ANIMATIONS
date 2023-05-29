const hiddenEl = document.querySelector('.hidden-el');
const show = document.getElementById('show');
const close = document.getElementById('close')

show.addEventListener('click', showHide)
close.addEventListener('click', showHide)

function showHide(){
    if(hiddenEl.classList.contains('inactive')){
        hiddenEl.classList.remove('inactive');
        hiddenEl.classList.toggle('active')
    } else {
        hiddenEl.classList.remove('active');
        hiddenEl.classList.toggle('inactive')
    }
}