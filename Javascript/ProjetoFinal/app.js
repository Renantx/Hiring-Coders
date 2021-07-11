//Pegar o input

const livros = require('./database');

const readline = require('readline-sync');
const entradaInicial = readline.question('Deseja buscar um livro? S/N');

// Se a resposta for SIM, mostra as categorias e pergunta qual ele escolhe
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis');
    console.log('/Produtividade e estilo de vida', '/História brasileira', '/Américas', '/Tecnologia', '/Estilo de vida');

    const entradaCategoria = readline.question('Qual categoria? ');

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);
    // Se a resposta for NÃO, mostra todos os livros em ordem crescente de páginas
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
    console.log('Esses são todos os livros disponíveis: ');
    console.table(livrosOrdenados);
}