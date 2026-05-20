// LOADER

window.addEventListener('load',()=>{

  const loader =
  document.getElementById('loader');

  setTimeout(()=>{

    loader.style.opacity='0';

    loader.style.visibility='hidden';

  },1200);

});


// CUSTOM CURSOR

const cursor =
document.querySelector('.cursor');

document.addEventListener('mousemove',(e)=>{

  cursor.style.left =
  e.clientX + 'px';

  cursor.style.top =
  e.clientY + 'px';

});


// NAVBAR EFFECT

window.addEventListener('scroll',()=>{

  const nav =
  document.querySelector('nav');

  if(window.scrollY > 50){

    nav.style.background =
    'rgba(255,255,255,.8)';

  }

  else{

    nav.style.background =
    'rgba(255,255,255,.45)';

  }

});
