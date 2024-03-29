const marvelSuperheroes = document.querySelector('.marvelSuperheroes .cards');
const dcSuperheroes = document.querySelector('.dcSuperheroes .cardsDc');
const dialogo = document.querySelector('.dialogo');
async function getData() {
    const response = await fetch('storage/data.json')
    return response.json()
}
const dataJson = await getData();
try {
    for (const key in dataJson) {
        if (key === "marvelSuperheroes") {
            for (const heroe in dataJson[key]) {
                let info = dataJson[key][heroe];
                let baseCard = `<figure class="cartaPersonaje" id='${info.nombre}'>
                <section class="imagen">
                    <img src="${info.imagen}" alt="noCarga">
                </section>
                <section class="nombre">
                    <p>${info.nombre}</p>
                </section>
            </figure>`
            let tdiv = document.createElement('div');
            tdiv.innerHTML = baseCard;
            marvelSuperheroes.appendChild(tdiv);
            }
        }
        if (key === "dcSuperheroes") {
            for (const heroe in dataJson[key]) {
                let info = dataJson[key][heroe];
                let baseCard = `<figure class="cartaPersonajeDc" id='${info.nombre}'>
                <section class="imagenDc">
                    <img src="${info.imagen}" alt="noCarga">
                </section>
                <section class="nombreDc">
                    <p>${info.nombre}</p>
                </section>
            </figure>`
            let tdiv = document.createElement('div');
            tdiv.innerHTML = baseCard;
            dcSuperheroes.appendChild(tdiv);
            }
        }
    }
} catch (error) {
    
}


    let cardsElement = document.querySelector('.cards');
    cardsElement.addEventListener('click', function (event) {
        if (event.target.closest('.cartaPersonaje')) {
            let nombreElement = event.target.closest('.cartaPersonaje');
            let contenidoNombre = nombreElement.querySelector('p').textContent;
            selector(contenidoNombre);
        }
    });
    let cardsElementDc = document.querySelector('.cardsDc');
    cardsElementDc.addEventListener('click', function (event) {
        if (event.target.closest('.cartaPersonajeDc')) {
            let nombreElement = event.target.closest('.cartaPersonajeDc');
            let contenidoNombre = nombreElement.querySelector('p').textContent;
            selector(contenidoNombre);
        }
    });
function selector(nombreSuper){
    for (let i = 0; i < dataJson.marvelSuperheroes.length; i++){
        if(dataJson.marvelSuperheroes[i].nombre === nombreSuper){
            reescribirModal(dataJson.marvelSuperheroes[i].imagen, dataJson.marvelSuperheroes[i].nombre, dataJson.marvelSuperheroes[i].descripcion);
        }
    }
    for (let i = 0; i < dataJson.dcSuperheroes.length; i++){
        if(dataJson.dcSuperheroes[i].nombre === nombreSuper){
            reescribirModal(dataJson.dcSuperheroes[i].imagen, dataJson.dcSuperheroes[i].nombre, dataJson.dcSuperheroes[i].descripcion);
        }
    }
}
function reescribirModal(img, nombre, descripcion) {
    let foto = document.getElementById('imagen');
    let titulo = document.getElementById('h2');
    let parrafo = document.getElementById('p');
    foto.src=img;
    titulo.textContent=nombre;
    parrafo.textContent=descripcion;
    dialogo.show();
}
let cerrarModal = document.getElementById('cerrar');
cerrarModal.addEventListener('click',function(event){
    dialogo.close();
});

let abrirMenu = document.querySelector('.allSuper');
abrirMenu.addEventListener('click',function(event){
    let menu = document.querySelector('.menu');
    menu.classList.toggle("active");
});
let menu = document.querySelector('.menu');
menu.addEventListener("click", function(){
    menu.classList.remove("active");
});
let soloDc = document.querySelector('.menu');
soloDc.addEventListener('click',function(event){
    if (event.target.closest('#dc')) {
        let oculto = document.querySelector('.marvelSuperheroes');
        let mostrardo = document.querySelector('.dcSuperheroes');
        let dc = document.getElementById('menuName');
        dc.textContent = 'Dc Comics'
        dc.style.color='#0078f0'
        oculto.style.display = 'none';
        mostrardo.style.display = 'block';
    }
    if (event.target.closest('#marvel')) {
        let oculto = document.querySelector('.dcSuperheroes');
        let dc = document.getElementById('menuName');
        dc.textContent = 'Marvel Comics'
        dc.style.color='#e62429'
        oculto.style.display = 'none';
        let mostrardo = document.querySelector('.marvelSuperheroes');
        mostrardo.style.display = 'block';
    }
    menu.classList.remove("active");
});

function buscador(nombreSuper){
    let carta = document.querySelectorAll('.cartaPersonaje');
    let cartaDc = document.querySelectorAll('.cartaPersonajeDc');
    carta.forEach(carta=>{
        if(carta.id.toLocaleLowerCase().includes(nombreSuper)){
            carta.style.display='flex';
        }
        else{
            carta.style.display='none';
        }
    })
    cartaDc.forEach(cartaDc=>{
        if(cartaDc.id.toLocaleLowerCase().includes(nombreSuper)){
            cartaDc.style.display='flex';
        }
        else{
            cartaDc.style.display='none';
        }
    })
}
let input = document.getElementById('input');
input.addEventListener('input',capturar)

function capturar(e) {
    buscador(e.target.value);
}