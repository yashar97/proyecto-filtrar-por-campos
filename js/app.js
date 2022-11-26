//variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//creamos los años dinamicamente
const max = new Date().getFullYear();
const min = max - 12;

//event listeners
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
    llenarSelect();

    const datosAuto = {
        marca: "",
        year: "",
        minimo: "",
        maximo: "",
        puertas: "",
        transmision: "",
        color: "",    
    }




    marca.addEventListener('change', e => {
        datosAuto.marca = e.target.value;
        filtrarAuto();
        
    });

    year.addEventListener('change', e => {
        datosAuto.year = e.target.value;
        filtrarAuto();
    });

    minimo.addEventListener('change', e => {
        datosAuto.minimo = e.target.value;
        filtrarAuto();
    });

    maximo.addEventListener('change', e => {
        datosAuto.maximo = e.target.value;
        filtrarAuto();
    });

    puertas.addEventListener('change', e => {
        datosAuto.puertas = e.target.value;
        filtrarAuto();
    });

    transmision.addEventListener('change', e => {
        datosAuto.transmision = e.target.value;
        filtrarAuto();
    });

    color.addEventListener('change', e => {
        datosAuto.color = e.target.value;
        filtrarAuto();
    });
    



    //funciones

function filtrarAuto() {
    const resultado = autos.filter(filtarPorMarca).filter(filtarPorYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
   
    mostrarAutos(resultado);
}

function filtarPorMarca(auto) {

    if(datosAuto.marca) {
        return auto.marca === datosAuto.marca;
    }
    return auto;

}

function filtarPorYear(auto) {
    if(datosAuto.year) {
        return auto.year === parseInt(datosAuto.year);
    }
    return auto;
}

function filtrarMinimo(auto) {
    if(datosAuto.minimo) {
        return auto.precio >= datosAuto.minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    if(datosAuto.maximo) {
        return auto.precio <= datosAuto.maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    if(datosAuto.puertas) {
        return auto.puertas === parseInt(datosAuto.puertas);
    }
    return auto;
}

function filtrarTransmision(auto) {
    if(datosAuto.transmision) {
        return auto.transmision === datosAuto.transmision;
    }
    return auto;
}

function filtrarColor(auto) {
    if(datosAuto.color) {
        return auto.color === datosAuto.color;
    }
    return auto;
}




function mostrarAutos(conjuntoAutos) {
    limpiarHTML();
    conjuntoAutos.forEach(element => {
        const {marca, modelo, year, precio, puertas, transmision, color} = element;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${marca} - ${modelo} - Año: ${year} - $${precio} - ${puertas} PUertas - Transmisión: ${transmision} - ${color}`;
        
        resultado.appendChild(autoHTML);
    });
}

//llenar el select de años dinamicamente
function llenarSelect() {
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function limpiarHTML() {
    resultado.innerHTML = "";
}

















});


