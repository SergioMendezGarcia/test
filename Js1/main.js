let sect = document.getElementById('sect');

// sect.onclick = function() {
//     dihola('Sergio');
// };

// const dihola = function(x) {
//     alert('Hola ' + x);
// }

// (function(x) {
//     sect.onclick = function() {
//         dihola(x);
//     }
// })("Sergio");

const mascotas = ()=>{
    let lista = [];
    for ( let i = 1; i <= 1000; i++ ) {
        lista.push("Mascota" + i);
    }

    return lista;
}


window.onload = function(){
    for ( let i = 0; i<mascotas().length; i++) {
        lmascotas.innerHTML += "<li>" + mascotas()[i] + "</li>";
    }
};