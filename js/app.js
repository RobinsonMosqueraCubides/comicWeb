const marvelSuperheroes = document.querySelector('.marvelSuperheroes .cards');
const dcSuperheroes = document.querySelector('.dcSuperheroes .cardsDc');
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
            console.log(dataJson.marvelSuperheroes[i].descripcion);
        }
    }
    for (let i = 0; i < dataJson.dcSuperheroes.length; i++){
        if(dataJson.dcSuperheroes[i].nombre === nombreSuper){
            console.log(dataJson.dcSuperheroes[i].descripcion);
        }
    }
}

