const marvelSuperheroes = document.querySelector('.marvelSuperheroes .cards');
async function getData() {
    const response = await fetch('storage/data.json')
    return response.json()
}
try {
    const dataJson = await getData();
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
            marvelSuperheroes.appendChild(tdiv.firstChild);
            }
        }
    }
} catch (error) {
    
}