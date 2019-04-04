console.log('Entra:...');

let x = 1;
console.log('x:...', x);

setTimeout(function(){
    x = x+1;
    console.log('Dentro:...', x);
},1000);

x = 5;

console.log('Sale:...', x);