let cambio = document.getElementById('a1');
let logo= document.getElementById('moon');

cambio.addEventListener('change', (event)=>{
    let chekeado = event.target.checked;
    document.body.classList.toggle('darkM');

    if(chekeado){
        logo.innerHTML='<i class="fa-regular fa-sun"></i>';
        logo.style.color='orange';
    }else{
        logo.innerHTML= '<i class="fa-regular fa-moon"></i>';
        logo.style.color='white';
    }

})