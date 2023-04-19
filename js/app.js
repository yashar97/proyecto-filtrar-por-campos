//variables
const resultado = document.querySelector('#resultado');
const spinner = document.querySelector('#spinner');
const btnReiniciar = document.querySelector('#reiniciar');

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//objeto con los datos de los select
const vehiculo = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
}

document.addEventListener('DOMContentLoaded', () => {
    btnReiniciar.addEventListener('click', () => {
        vehiculo.marca = '';
        vehiculo.year = '';
        vehiculo.minimo = '';
        vehiculo.maximo = '';
        vehiculo.puertas = '';
        vehiculo.transmision = '';
        vehiculo.color = '';

        marca.value = "";
        year.value = "";
        minimo.value = "";
        maximo.value = "";
        puertas.value = "";
        transmision.value = "";
        color.value = "";
        
        cargarAutos(autos);
    });

    cargarAutos(autos);

    llenarSelectYear();

    //eventos
    marca.addEventListener('change', e => {
        vehiculo.marca = e.target.value;


        filtrarAuto();


    });

    year.addEventListener('change', e => {
        vehiculo.year = e.target.value;
        filtrarAuto();
    });

    minimo.addEventListener('change', e => {
        vehiculo.minimo = e.target.value;
        filtrarAuto();
    });

    maximo.addEventListener('change', e => {
        vehiculo.maximo = e.target.value;
        filtrarAuto();
    });

    puertas.addEventListener('change', e => {
        vehiculo.puertas = e.target.value;
        filtrarAuto();
    });

    transmision.addEventListener('change', e => {
        vehiculo.transmision = e.target.value;
        filtrarAuto();
    });

    color.addEventListener('change', e => {
        vehiculo.color = e.target.value;
        filtrarAuto();
    });

});

function mostrarSpinner() {
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
    }, 500);
}

function limpiarHTML() {
    resultado.innerHTML = '';
}

function filtrarAuto() {
    limpiarHTML();
    mostrarSpinner();
    
    setTimeout(() => {
        const filtrado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    console.log(filtrado);

    cargarAutos(filtrado);
    }, 500);
}

function filtrarColor(element) {
    if (vehiculo.color) {
        return element.color === vehiculo.color;
    }

    return element;
}

function filtrarTransmision(element) {
    if (vehiculo.transmision) {
        return element.transmision === vehiculo.transmision;
    }

    return element;
}

function filtrarPuertas(element) {
    if (vehiculo.puertas) {
        return element.puertas === parseInt(vehiculo.puertas);
    }

    return element;
}

function filtrarMaximo(element) {
    if (vehiculo.maximo) {
        return element.precio <= vehiculo.maximo;
    }

    return element;
}

function filtrarMinimo(element) {
    if (vehiculo.minimo) {
        return element.precio >= vehiculo.minimo;
    }

    return element;
}

function filtrarYear(element) {
    if (vehiculo.year) {
        return element.year === parseInt(vehiculo.year);
    }

    return element;
}

function filtrarMarca(element) {

    if (vehiculo.marca) {
        return element.marca === vehiculo.marca;
    }

    return element;
}

function llenarSelectYear() {

    const max = new Date().getFullYear();
    const min = max - 23;

    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        year.appendChild(option);
    }
}

function cargarAutos(array) {


    array.forEach(autos => {
        const { marca, modelo, year, precio, puertas, transmision, color } = autos;
        const auto = document.createElement('p');
        auto.innerHTML = `
        ${marca} - ${modelo} - ${year} - $${precio} - Puertas ${puertas} - Transmisión: ${transmision} - Color: ${color}`;
        resultado.appendChild(auto);
    });
}