const projectPrev = document.querySelector('.project__prev');
const projectNext = document.querySelector('.project__next');
const projectIntroduce = document.querySelector('.project__introduce');
const projectItem = document.querySelector('.project__introduce-item');
const header = document.querySelector('.header');
const operation = document.querySelectorAll('.operation__item')
projectPrev.onclick = function () {
    projectIntroduce.scrollBy(-395, 0);
    projectIntroduce.getElementsByClassName.transition = "all 1s"
}

projectNext.onclick = function () {
    projectIntroduce.scrollBy(395, 0);
    projectIntroduce.getElementsByClassName.transition = "all 1s"
}

window.onscroll = function (){
    if(document.documentElement.scrollTop > 0) {
        header.style.height = "60px"
        header.style.transition = "all 0.3s"
    }else {
        header.style.height = "80px"
        header.style.transition = "all 0.3s"
    }
}

function run () {
    
        setTimeout(function (){
            console.log('hello')
       }, 1000)
       operation.forEach(item => {
           
       })
    }

run()
var i = 0;
var index = 0;
setInterval(function () {
    if(projectIntroduce.scrollLeft < 774){
        projectIntroduce.scrollBy(395, 0);
        index++;
        document.querySelector('.operation__item.active').classList.remove('active')
        operation[index].classList.add('active')
    }
    if(projectIntroduce.scrollLeft === 774){
        projectIntroduce.scrollBy(-790, 0);
        index = 0;
        document.querySelector('.operation__item.active').classList.remove('active')
        operation[index].classList.add('active')
    }
}, 2500)


operation.forEach (item => {
    item.onclick = function () {
        document.querySelector('.operation__item.active').classList.remove('active')

        this.classList.add('active')
    }
}) 

