
/* foi criado uma function para receber um valor de um selector
function tocaSom_pom (){
    document.querySelector('#som_tecla_pom').play();
}

function tocaSom_clap (){
    document.querySelector('#som_tecla_clap').play();
}   
*/
function tocaSom(seletorAudio){
   const elemento = document.querySelector(seletorAudio);
   if(elemento != null && elemento.localName === 'audio'){
       elemento.play();
   }
   else{
       console.log('elemento não encontrado ou seletor invalido');
   }
}

const listaDeTeclas = document.querySelectorAll('.tecla');//criando uma contante para receber o querySelector

// document.querySelector('.tecla_pom').onclick = tocaSom_pom; selecionado o class tecla_pom

/* estrutura de repeticao usando while
let contador = 0;

while (contador < listaDeTeclas.length){

    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    console.log(instrumento);
    teclas.onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
console.log(contador);
*/
for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const idAudio = `#som_${instrumento}`;

    //console.log(instrumento);
    // console.log(contador);
    teclas.onclick = function(){
        tocaSom(idAudio);

}

teclas.onkeydown = function (evento) {/*criando uma function anonima, passando uma funcao onkeydown para mara a tecla quando ouve o evento do teclado */ 
    if(evento.code === 'Enter' || evento.code === 'Space'){
    teclas.classList.add('ativa');
    }
}

 teclas.onkeyup = function (){
     teclas.classList.remove('ativa');

 }
}


 


/*
while = enquanto(estrutura de repetição)
for  = para
let = usado para criar uma variavel de referência(onde o valor da variavel tem seu valor alterado)
function = criado para chamar um comando, assim nao sendo necessario escrever todo codigo para chama o comando novamente. podendo passar 
paramentro de entrada, se a aplicação necessitar.
console.log() = usado para ver o resultado no console.

*/



