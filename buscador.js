//selectores
const isbn = document.querySelector('#isbn');
const nombre = document.querySelector('#nombre');
const autor = document.querySelector('#autor');
const edicion = document.querySelector('#edicion');
const categoria = document.querySelector('#categoria');





//objeto
const datosBusqueda = {
    isbn: '',
    nombre: '',
    autor: '',
    edicion: '',
    categoria: ''

}

//EVENTOS

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarLibros(libros)
});

isbn.addEventListener('input', e =>{
    datosBusqueda.isbn = e.target.value;
    //console.log(datosBusqueda.isbn);
    filtrarLibros()
})

nombre.addEventListener('input', e =>{
    datosBusqueda.nombre = e.target.value;
    //console.log(datosBusqueda.nombre);
    filtrarLibros()
})

autor.addEventListener('input', e =>{
    datosBusqueda.autor = e.target.value;
    //console.log(datosBusqueda.autor);
    filtrarLibros()
})

edicion.addEventListener('input', e =>{
    datosBusqueda.edicion = e.target.value;
    //console.log(datosBusqueda.edicion);
    filtrarLibros()
})

categoria.addEventListener('input', e =>{
    datosBusqueda.categoria = e.target.value;
    //console.log(datosBusqueda.categoria);
    filtrarLibros()
})

//funciones

function mostrarLibros(libros){
    limpiarHTML()

    const contenedorLibros = document.querySelector('#resultado')
    libros.forEach(libro => {
        const libroHTML = document.createElement('p');
        libroHTML.innerHTML = `
        <p> ${libro.isbn} - ${libro.nombre} - ${libro.autor} - ${libro.edicion} - ${libro.categoria}
        `;
        contenedorLibros.appendChild(libroHTML);
    });
}

function limpiarHTML(){
    const contenedor = document.querySelector('#resultado');
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}

function filtrarLibros(){
    const resultado = libros.filter(filtrarIsbn)
    const resultadoNombre = libros.filter(filtrarNombre)
    const resultadoAutor = libros.filter(filtrarAutor)
    const resultadoEdicion = libros.filter(filtrarEdicion)
    const resultadoCategoria = libros.filter(filtrarCategoria)
    //console.log(resultado);
    if(resultado.length){
        mostrarLibros(resultado)
    }
    if(resultadoNombre.length){
        mostrarLibros(resultadoNombre)
    }
    if(resultadoAutor.length){
        mostrarLibros(resultadoAutor)
    }
    if(resultadoEdicion.length){
        mostrarLibros(resultadoEdicion)
    }
    if(resultadoCategoria.length){
        mostrarLibros(resultadoCategoria)
    }


}



function filtrarIsbn(libro) {
    if(datosBusqueda.isbn){
        return libro.isbn === datosBusqueda.isbn;
    }
}

function filtrarNombre(libro) {
    if(datosBusqueda.nombre){
        return libro.nombre === datosBusqueda.nombre;
    }
}

function filtrarAutor(libro) {
    if(datosBusqueda.autor){
        return libro.autor === datosBusqueda.autor;
    }
}

function filtrarEdicion(libro) {
    if(datosBusqueda.edicion){
        return libro.edicion === datosBusqueda.edicion;
    }
}

function filtrarCategoria(libro) {
    if(datosBusqueda.categoria){
        return libro.categoria === datosBusqueda.categoria;
    }
}









