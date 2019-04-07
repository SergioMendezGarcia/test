(function() {
    const imprimirMascotas = function(lista){
        let favoritos = document.getElementById('favoritos');
        let i = 0;
        let mascota = document.getElementById('mascota');

        const impresion = function(lista) {
            mascota.innerHTML = `
                <h4 id="nombrem">${lista[i].nombre}</h4>
                <img id="matching" src="${lista[i].foto}" /><br />
                <button class="anterior"> < </button> <button id="match"><img src="./img/heart.png" alt=""/></button> <button class="siguiente"> > </button>
            `;
            console.log("src:", lista[i].foto, ", nombre:", lista[i].nombre);
            //Plantillas ES6, se utilíza los `` para escribir dentro, y acepta tabulaciones y saltos de línea
            //"<li>" + mascotas()[i].id + "- " + mascotas()[i].nombre + ", " + mascotas()[i].edad + " años, " + mascotas()[i].precio + "€</li>";
        };
        impresion(lista);

        
            //console.log('imprimeMascotas:', document.querySelectorAll('.btn-comprar'));
        document.querySelectorAll('.anterior').forEach(function(unBtn){
            unBtn.onclick = function() {
                let foto = document.getElementById('matching');
                if ( i == 0 ) {
                    i = lista.length-1;
                } else {
                    --i;
                }
                foto.src = lista[i].foto;
                nombrem.innerHTML = lista[i].nombre;
            };
        });

        document.querySelectorAll('.siguiente').forEach(function(unBtn){
            unBtn.onclick = function() {
                let foto = document.getElementById('matching');
                if ( i == lista.length-1 ) {
                    i = 0;
                } else {
                    ++i;
                }
                foto.src = lista[i].foto;
                nombrem.innerHTML = lista[i].nombre;
            };
        });

        document.querySelectorAll('#match').forEach(function(fav, ){
            fav.onclick = function() {
                    console.log("fav:", favoritos);
                    favoritos.innerHTML += `
                    <li>${lista[i].nombre}</li>`;
            };
        });

    };

    fetch('http://www.mocky.io/v2/5ca792c1520000b30b97b63e')
    .then( function(response) {
        console.log('response:', response);
        return response.json();
    }).then( function(json_data) {
        console.log('json_data: ', json_data);
        imprimirMascotas(json_data);
    }).catch( function(err) {
        console.log('Error: ', err);
    });
})();