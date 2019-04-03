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
(function() {
const mascotas = ()=>{
    let lista = [];
    for ( let i = 1; i <= 1000; i++ ) {
        lista.push("Mascota" + i);
    }

    return lista;
}

const imprimirMascotas = ()=>{
    let nmascotas = "";
    for ( let i = 0; i<mascotas().length; i++) {
        nmascotas += "<li>" + mascotas()[i] + "</li>";
    }
    lmascotas.innerHTML = nmascotas;
}
imprimirMascotas();

})();