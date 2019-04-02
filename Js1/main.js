let sect = document.getElementById('sect');

// sect.onclick = function() {
//     dihola('Sergio');
// };

const dihola = function(x) {
    alert('Hola ' + x);
};

(function(x) {
    sect.onclick = function() {
        dihola(x);
    }
})("Sergio");