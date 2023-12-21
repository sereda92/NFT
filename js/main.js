
const burgerBody = document.getElementById('burger-body')
const burgerBtn = document.getElementById('burgerBtn')
const burgerLine = document.getElementById('burger-line')

burgerBtn.addEventListener('click', function(){
    if(burgerBody.classList.contains('burger-active')){
        burgerBody.classList.remove('burger-active')
        burgerLine.classList.remove('burger-line-active')
    }else{
        burgerBody.classList.add('burger-active')
        burgerLine.classList.add('burger-line-active')
    }

})