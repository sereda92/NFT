// const textPath = document.querySelector('textPath');
// textPath.setAttribute('startOffset', '0%'); // Начало текста с середины круга

const burgerBody = document.getElementById('burger-body')
const burgerBtn = document.getElementById('burgerBtn')

burgerBtn.addEventListener('click', function(){
    if(burgerBody.classList.contains('burger-active')){
        burgerBody.classList.remove('burger-active')
    }else{
        burgerBody.classList.add('burger-active')
    }

})