/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-      Function Hoisting      -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=   */

saudacao (); // Chamando a função antés de cria-lá.

function saudacao() {
    console.log('Oi');
}

saudacao(); // Chamando a função após cria-lá.

// Function hoisting é a possibilidade de chamar a função após ou antes de sua criação.
// Esse function hoisting só é possível quando declaramos funções no modelo clássico.

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-      Function Expression      -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=   */

// Function Expression é a possibilidade de atribuir uma função à uma variável.
// Isso é possível pois em JavaScript funções são consideradas first-class-objects.

const falaOi = function() {
    console.log('Olá, estou falando oi!');
};

falaOi();
    
function executaFunc(func) {
    func()
}

executaFunc(falaOi);

/* -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-      Arrow Function      -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=   */

const raizQuadrada = (num) => {
    return num ** 0.5;
}