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
const genNombre = ()=>{
    const nombres = ['missy','rex','perro','bob','luna','max','sebes','gina','balto','taxi'];
    let r = Math.floor(Math.random()*nombres.length);
    return nombres[r];
}

const mascotas = ()=>{
    let lista = [];
    let er = Math.floor(Math.random()*14+1);
    let pr = Math.floor(Math.random()*200+50);
    for ( let i = 1; i <= 1000; i++ ) {
        lista.push({id:i,nombre: genNombre() + ' ' +  genNombre(),edad:er,precio:pr});
    }

    return lista;
}

const imprimirMascotas = ()=>{
    let nmascotas = "";
    for ( let i = 0; i<mascotas().length; i++) {
        nmascotas += `
        <li>
            <span>${mascotas()[i].id}- </span>
            <span>${mascotas()[i].nombre}, </span>
            <span>${mascotas()[i].precio}€</span>
        </li>
        `;//Plantillas ES6, se utilíza los `` para escribir dentro, y acepta tabulaciones y saltos de línea
        //"<li>" + mascotas()[i].id + "- " + mascotas()[i].nombre + ", " + mascotas()[i].edad + " años, " + mascotas()[i].precio + "€</li>";
    }
    lmascotas.innerHTML = nmascotas;
}
imprimirMascotas();

})();