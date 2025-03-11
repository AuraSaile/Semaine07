const boutonsModale = document.querySelectorAll('.btn');
const modale = document.querySelector('.modale');

const image = document.createElement('img');

for(let i = 0; i < boutonsModale.length; i++){
    boutonsModale[i].addEventListener('click', openModale)
    
}

function openModale(){
     modale.classList.add('visible');
     image.classList.add('zoom');
     modale.addEventListener("click", closeModale);
     console.log('bouh')
}

function closeModale(){
    
    modale.classList.remove('visible');

    console.log('bouh2')
}