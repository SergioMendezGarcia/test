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


let sect = document.getElementById('sect');

(function() {
    const nombres = ['missy','rex','perro','bob','luna','max','sebes','gina','balto','taxi'];

    const genNombre = ()=>{
        let r = nombres[Math.floor(Math.random()*nombres.length)];
        return r;
        };

        const mascotas = ()=>{
        let lista = [];
        let er = Math.floor(Math.random()*14+1);

        for ( let i = 1; i <= 100; i++ ) {
            lista.push({id:i,nombre: genNombre() + ' ' +  genNombre(),edad:er,precio:Math.floor(Math.random()*201+50)});
        };
        console.log('mascotas', JSON.stringify(lista));
        
        return lista;
    };

    const imprimirMascotas = function(lista){
        let nmascotas = "";
        //let lista = mascotas();
        let carro = document.getElementById('carro');
        const carrito = [];

        for ( let i = 0; i<lista.length; i++) {
            nmascotas += `
                <li>
                    <span>${lista[i].id}- </span>
                    <span>${lista[i].nombre}, </span>
                    <span>${lista[i].precio}€</span>
                    <span><button data-id="${lista[i].id}" data-nombre="${lista[i].nombre}" data-precio="${lista[i].precio}"} class="btn-comprar">Comprar</button></span>
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
                const precio = unBtn.getAttribute('data-precio');
                const alreadyAdded = carrito.includes(id);
                if ( !alreadyAdded ) {
                    carro.innerHTML += '<li>' + nombre + ', ' + precio + '€</li>';
                    carrito.push(id);
                    // alert('Añadidio: ' + nombre);
                    unBtn.style.backgroundColor = "#c00";
                    unBtn.style.border = "1px solid #900";
                    unBtn.style.color = "#fff";
                    unBtn.parentElement.parentElement.style.color = "#c00";

                    console.log('Carrito: ', carrito);
                } else {
                    console.log('Carrito: ',id, ' ya estaba añadido');
                }
            };
        });

    };

    fetch('http://www.mocky.io/v2/5ca61ddc3400005f0076af55')
    .then( function(response) {
        console.log('response:', response);
        return response.json();
    }).then( function(json_data) {
         imprimirMascotas(json_data);
    }).catch( function(err) {
        console.log('err: ', err);
    });
})();