// Al cargar la página agregar evento del indicador y activar botones del inicio
var menuList = document.getElementById('menu-list');

document.addEventListener('DOMContentLoaded', () => {
    let subtopics = document.querySelectorAll('.subtopic');
    subtopics.forEach((element) => {
        if(element.id == "n01" || element.id == "n02"){
        }else{
            element.addEventListener('click', moveBehind);
        }
    });

    let btnMenu = document.getElementById('btn-menu');
    btnMenu.addEventListener('click', ()=>{
        if (menuList.style.display === 'none') {
            menuList.style.display = 'block';
        } else {
            menuList.style.display = 'none';
        }
    });
    btnMenu.click();

    let index = document.querySelectorAll('.index');
    index.forEach((element) => {
        element.addEventListener('click', navigate);
    });

    let btn110 = document.getElementById('110');
    btn110.click();
    let btn210 = document.getElementById('210');
    btn210.click();
    let btn310 = document.getElementById('310');
    btn310.click();
    let btn410 = document.getElementById('410');
    btn410.click();
    let btn510 = document.getElementById('510');
    btn510.click();
});

// Mover indicador, ocultar contenidos y mostrar el indicado, y centrar contenido verticalmente
const moveBehind = function(){
    let yPosition = this.offsetTop;
    let subtopics = this.parentNode;
    let childNodes = Array.from(subtopics.children);
    childNodes[0].style.top = `${yPosition}px`; 
    this.classList.add('subtopic-no-hover');
    this.classList.remove('subtopic');
    childNodes.slice(1, childNodes.length).forEach((element) => {
        if (element != this) {         
            element.classList.add('subtopic');
            element.classList.remove('subtopic-no-hover');   
        }
    });

    let idContent = 'content-'+this.id;
    //console.log(idContent)
    let elementDisplay = document.getElementById(idContent);
    //console.log(elementDisplay)
    contents = elementDisplay.parentNode;
    let elementsHide = Array.from(contents.children); 
    //console.log(elementsHide)
    displayContent(elementsHide, elementDisplay);

    if (contents.scrollHeight > contents.clientHeight) {
        contents.style.justifyContent = 'start';
    } else {
        contents.style.justifyContent = 'center';
    }
};

//Funcion para ocultar contenido
const displayContent = function(elementsToHide, elementDisplay) {
    elementsToHide.forEach(element => {
        element.style.display = 'none';
    });
    if (elementDisplay != null) {
        elementDisplay.style.display = 'block';        
    }
};

const navigate = function() {
    let ahref = this.getAttribute('href');
    let idElement = ahref.substring(1, ahref.length);
    if(idElement == "n01" || idElement == "n02"){
    }else{
        let btn = document.getElementById(idElement);
        btn.click();
    }
    menuList.style.display = 'none';
};