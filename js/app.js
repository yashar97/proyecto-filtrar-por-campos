//variables
const resultado = document.getElementById('resultado');
const marca = document.getElementById('marca');
const selectYear = document.getElementById('year');
const minimo = document.getElementById('minimo');
const maximo = document.getElementById('maximo');
const puertas = document.getElementById('puertas');
const transmision = document.getElementById('transmision');
const color = document.getElementById('color');
const spinner = document.getElementById('spinner');

const filtros = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    llenarSelectYear();
    mostrarAutos(autos);

    //evento change a cada select
    marca.addEventListener('change', e => {
        filtros.marca = e.target.value;
        filtrarAutos();
    });

    year.addEventListener('change', e => {
        filtros.year = e.target.value;
        filtrarAutos();
    });

    minimo.addEventListener('change', e => {
        filtros.minimo = e.target.value;
        filtrarAutos();
    });

    maximo.addEventListener('change', e => {
        filtros.maximo = e.target.value;
        filtrarAutos();
    });

    puertas.addEventListener('change', e => {
        filtros.puertas = e.target.value;
        filtrarAutos();
    });

    transmision.addEventListener('change', e => {
        filtros.transmision = e.target.value;
        filtrarAutos();
    });

    color.addEventListener('change', e => {
        filtros.color = e.target.value;
        filtrarAutos();
    });
});

//funciones
function llenarSelectYear() {
    const fecha = new Date().getFullYear();

    for (let i = fecha; i >= 2013; i--) {
        const option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        selectYear.appendChild(option);
    }
}

function mostrarAutos(autos) {
    spinner.style.display = 'block';
    resultado.innerHTML = '';
    setTimeout(() => {
        spinner.style.display = 'none';
        autos.forEach(auto => {
            const { marca, modelo, year, precio, puertas, color, transmision } = auto;
            resultado.innerHTML += `
                <p>${marca} - ${modelo} - ${year} - $${precio} - ${puertas} Puertas - ${color} - ${transmision}</p>
            `;
        });
    }, 1000);

}

function filtrarAutos() {
    const resultadoFiltrado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    mostrarAutos(resultadoFiltrado);
}

function filtrarMarca(element) {
    if (filtros.marca) {
        return element.marca === filtros.marca;
    }

    return element;
}

function filtrarYear(element) {
    if (filtros.year) {
        return element.year === parseInt(filtros.year);
    }

    return element;
}

function filtrarMinimo(element) {
    if (filtros.minimo) {
        return element.precio >= filtros.minimo;
    }

    return element;
}

function filtrarMaximo(element) {
    if (filtros.maximo) {
        return element.precio <= filtros.maximo;
    }

    return element;
}

function filtrarPuertas(element) {
    if (filtros.puertas) {
        return element.puertas === parseInt(filtros.puertas);
    }

    return element;
}

function filtrarTransmision(element) {
    if (filtros.transmision) {
        return element.transmision === filtros.transmision;
    }

    return element;
}

function filtrarColor(element) {
    if (filtros.color) {
        return element.color === filtros.color;
    }

    return element;
}

console.log('logrado')