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


// Que es una function? es un bloque de codigo que sirve para que una persona lo use.
//for igual a cuando sabes que termina las interacciones.
//wite es cuando va a psar pero no sabes cuando.


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
////

function menoresaDIez(Listanumeros) {
    let Listamenores= [];
    for (let i=0 ; i < Listanumeros.length; i++){
        if(Listanumeros[i]<10){
            Listamenores.push(Listanumeros[i]); 
        } 
    }
    return Listamenores;
}
   console.log (menoresaDIez([11, 15, 9, 7,4]));

///

function dobledecadanum (listanum) {
    let numx2=[];
    for (let i=0; i < listanum.length; i++){
        numx2.push (listanum[i] * 2);
    }
    return numx2;
}
console.log (dobledecadanum ([10, 9, 18 ,17]));
///


function numprimo (num) {
    for (let i= 2 ; i < num ; i ++){

        if (num % i===0){
    return false;
}
 else { 
     return true;
       }
     }
    }

console.log (numprimo([8]));


///


function cinconumPrimos() {
    const primerosprimos = [];
     
    let candidatoAprimero= 2;
    while (primerosprimos.length < 5){
        if(numprimo(candidatoAprimero)) {
            primerosprimos.push(candidatoAprimero);
        }
        candidatoAprimero ++;
    }
    return primerosprimos;
}
  console.log(cinconumPrimos([1, 5, 6, 7, 8, 10]));









