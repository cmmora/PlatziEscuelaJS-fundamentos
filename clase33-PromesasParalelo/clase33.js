const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = {crossDomain: true}


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $.get(url, opts, (data) => {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`sucedio un error al obtener el personaje ${id}`)
}

var ids = [1, 2, 3, 4, 5, 6, 7]
// var promesas = ids.map(function(id) {    //Funcion normal
//     return obtenerPersonaje(id)
// })
var promesas = ids.map(id => obtenerPersonaje(id))  //Igual a la anterior pero como arrow function

Promise
    .all(promesas)
    .then (resp => {
        resp.forEach(element => {
            console.log(`Hola, soy ${element.name}`)
        })
    })


.catch(onError)