const navList = document.querySelector('.navlist');
const navHam = document.querySelector('.navham');


navHam.addEventListener('click', ()=>{
    navList.classList.toggle('active')
    navHam.classList.toggle('active');
})

document.querySelectorAll('.nav-items').forEach(n =>{
    n.addEventListener('click', ()=>{
        navList.classList.remove('active');
        navHam.classList.toggle('active');
    })
})