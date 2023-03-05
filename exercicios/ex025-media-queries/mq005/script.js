function clickMenu(){
    let menu = window.document.querySelector('menu');
    if (menu.style.display == 'block'){
        menu.style.display = 'none';
    } else{
        menu.style.display = 'block';
    }
}

function tamanho(){
    let menu = window.document.querySelector('menu')
    if (window.innerWidth >= 992){
        menu.style.display = 'block';
    } else{
        menu.style.display = 'none';
    }
}