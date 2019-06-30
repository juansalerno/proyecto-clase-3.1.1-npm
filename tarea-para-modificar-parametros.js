let argumentos = process.argv;
console.log(argumentos.slice(2));

let suma = 0;
for (let i = 2; i < argumentos.length; i++) {
    suma += parseInt(argumentos[i]);
}
if (suma > 100) {
    console.log('la suma es mayor a 100: ' + suma);
}
else {
    console.log('La suma no es mayor a 100: '+ suma);
}