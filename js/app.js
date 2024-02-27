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
                let baseCard = `<figure class="cartaPersonaje">
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
                let baseCard = `<figure class="cartaPersonajeDc">
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