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
    const nombres = ['missy','rex','perro','bob','luna','max','sebes','gina','balto','taxi'];

    const genNombre = ()=>{
        let r = nombres[Math.floor(Math.random()*nombres.length)];
        return r;
        };

        const mascotas = ()=>{
        let lista = [];
        let er = Math.floor(Math.random()*14+1);

        for ( let i = 1; i <= 1000; i++ ) {
            lista.push({id:i,nombre: genNombre() + ' ' +  genNombre(),edad:er,precio:Math.floor(Math.random()*200+50)});
        };

        return lista;
    };

    const imprimirMascotas = ()=>{
        let nmascotas = "";
        let lista = mascotas();

        for ( let i = 0; i<mascotas().length; i++) {
            nmascotas += `
                <li>
                    <span>${lista[i].id} </span><br />
                    <span>${lista[i].nombre}, </span><br />
                    <span>${lista[i].precio}€</span><br />
                    <span><button data-id="${lista[i].id}" data-nombre="${lista[i].nombre}"}" class="btn-comprar">Comprar</button></span>
                </li>
            `;
            //Plantillas ES6, se utilíza los `` para escribir dentro, y acepta tabulaciones y saltos de línea
            //"<li>" + mascotas()[i].id + "- " + mascotas()[i].nombre + ", " + mascotas()[i].edad + " años, " + mascotas()[i].precio + "€</li>";
        };
        lmascotas.innerHTML = nmascotas;
            //console.log('imprimeMascotas:', document.querySelectorAll('.btn-comprar'));
        document.querySelectorAll('.btn-comprar').forEach(function(unBtn){
            unBtn.onclick = function() {
                const id = unBtn.getAttribute('data-id');
                const nombre = unBtn.getAttribute('data-nombre');
                alert('Añadidio: ' + id + " " + nombre);
            };
        });

    };

    imprimirMascotas();
})();