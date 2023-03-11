const tlacitkoSipka = document.querySelector('.article-text-box__share');
const shareBox = document.querySelector('.sharing-box');


tlacitkoSipka.addEventListener('click',function(){
    tlacitkoSipka.classList.toggle('aktivni');
    shareBox.classList.toggle('zmiz');
})
