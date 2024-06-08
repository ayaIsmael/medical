window.onscroll=function(){

    let top=document.querySelector('.top');
    if(window.scrollY >= 600){
        top.style.opacity=1;
    }else{
        top.style.opacity=0;
    }

    let slider = document.querySelector('.background-animation');
    let doctors = document.querySelectorAll('.doctors');
    if(window.scrollY >= slider.offsetTop - 200){
        doctors.forEach( doctor => {
            doctor.style.animationName = "scroll-x" ;
        })
    }else{
        doctors.forEach( doctor => {
            doctor.style.animationName = "unset" ;
        })
    }

    let about = document.querySelector(".about");
    let progressBars = document.querySelectorAll(".progress-bar");
    if(window.scrollY >= about.offsetTop - 100){
        progressBars.forEach(progressBar => {
            progressBar.style.width = progressBar.dataset.width;
        });
    }

};


let subscribe=document.getElementById('subscribe');
subscribe.addEventListener('click', () => {
    let email=document.getElementById('email');
    email.focus();
})



function test() {

    let activeItem=document.querySelector('.active');
    let items=document.querySelectorAll('.nav-item');
    let hori=document.querySelector('.hori-selector');

    hori.style.width = activeItem.scrollWidth + 'px';
    hori.style.height = activeItem.scrollHeight + 'px';
    hori.style.left = activeItem.offsetLeft + 'px';
    hori.style.top = activeItem.offsetTop + 'px';

    items.forEach(item => {
        item.addEventListener('click', () => {
            hori.style.width = item.scrollWidth + 'px';
            hori.style.height = item.scrollHeight + 'px';
            hori.style.left = item.offsetLeft + 'px';
            hori.style.top = item.offsetTop + 'px';
    
            document.querySelector('.active').classList.remove('active');
            item.classList.add('active');
        });
    });

}

window.onload=function(){
    setTimeout(function () { test(); });
}

window.onresize=function(){
    setTimeout(() => { test(); }, 500);
}

document.querySelector('.navbar-toggler').onclick=function(){
    test();
}

