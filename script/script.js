function sumarlista(ListaDenumero) {
    let acumulador =0;
    for (let i=0; i <ListaDenumero.length; i ++) {
        acumulador = ListaDenumero[i] + acumulador;
    }
    return acumulador;
}

console.log(sumarlista([2, 3, 5]));
//


function sumarlista2(ListaDenumero) {
    return ListaDenumero.reduce(
        function (a,b) {
            return a+b;
        } ,
        0
    );
}
console.log(sumarlista2([4, 6, 3]));
///

function sumarlista3(ListaDenumero) {
    return ListaDenumero.reduce( (a , b) => a+b, 0 ) ;
}
console.log (sumarlista3([2 ,5 ,6]));
//ECMA script // arrow function//


// que es una function=es un bloque de codigo que sirve para que una persona lo use 
//for igual a cuando sabes que termina las interacciones
//wite es cuando va a psar pero no sabes cuando 


function cacularMaximo(ListaDenumero) {
    let candidato= ListaDenumero[0];
    for(let i=1 ; i<ListaDenumero.length; i++){
        if(candidato < ListaDenumero[i]){
            candidato = ListaDenumero[i];

        }
    }
    return candidato;
}
console.log (cacularMaximo([9 ,5, 17, 1]));
//


function calcularMaximo2(ListaDenumero) {
    return Math.max(...ListaDenumero);

}
console.log (cacularMaximo([9 ,5, 1, 1]));
//ECMA script /  spread operator arrow function




function sacarPromedio(ListaDenumero) {
    let acumulador=0;
    for (let i=0; i< ListaDenumero.length; i ++) {
        acumulador += ListaDenumero[i];
    }
    return acumulador/ListaDenumero.length;
}
console.log(sacarPromedio ([8, 5, 6]));










