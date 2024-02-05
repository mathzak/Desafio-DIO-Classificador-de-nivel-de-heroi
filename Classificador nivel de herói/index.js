<<<<<<< HEAD
// a variavel do nome do herói é declarada
let nomeHeroi = "SuperNode"
=======
//Caso esteja utilizando o node no terminal, substitua o conteúdo da variável nomeHeroi pelo nome desejado estre aspas duplas ex: "superNode"
let nomeHeroi = prompt("Digite o nome do seu herói:");
>>>>>>> a1856e040e9e3f0d26c3ccf3aebde18251e1d4fe

// As variaveis são declaradas 
let ExperienciaDoHeroi;
let nivelDoHeroi;

//A função gera um número aleatório entre dois valores é declarada
function gerarNumeroInteiroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

//A variavel recebe o valor retornado da função com os parametros minimo = 0 e maximo = 10500
ExperienciaDoHeroi = gerarNumeroInteiroAleatorio(0,10500);

// É criada a estrutura de decisão e os laços de repetição
if (ExperienciaDoHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (ExperienciaDoHeroi >= 1001 && ExperienciaDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (ExperienciaDoHeroi >= 2001 && ExperienciaDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (ExperienciaDoHeroi >= 5001 && ExperienciaDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (ExperienciaDoHeroi >= 7001 && ExperienciaDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (ExperienciaDoHeroi >= 8001 && ExperienciaDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (ExperienciaDoHeroi >= 9001 && ExperienciaDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

//É impressa a mensagem com a quantidade de experiencia do herói
console.log(`A quantidade de experiência do seu herói é ${ExperienciaDoHeroi}. `);

//Ao final é exibida a mensagem de saída exigida do desafio
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelDoHeroi}.`);
