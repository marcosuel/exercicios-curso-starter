const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];


var resultado = [];
//2.1
resultado = usuarios.map(usuario => usuario.idade);
console.log(resultado);

//2.2
resultado = usuarios.filter(usuario => {
    return usuario.idade >= 18 && usuario.empresa === 'Rocketseat'
});
console.log(resultado);

//2.3
resultado = usuarios.find(usuario => usuario.empresa === 'Google');
console.log(resultado);

//2.4
resultado = usuarios.map(usuario => {
    return {...usuario, idade: usuario.idade * 2};
}).filter(usuario => usuario.idade <= 50);
console.log(resultado);