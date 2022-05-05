let cinema = 'CineHouse';
let catalogo =  require("./database/catalogo")

/* var filme1 = {
  codigo: 0,
  titulo: 'Gantz',
  duracao: 2,
  atores: ['Kazunari Ninomiya', 'Kenichi Matsuyama'],
  anoDeLancamento: 2010,
  emCartaz: false
}
var filme2 = {
  codigo: 1,
  titulo: 'Gantz: Perfect Answer',
  duracao: 2,
  atores: ['Kazunari Ninomiya', 'Kenichi Matsuyama'],
  anoDeLancamento: 2011,
  emCartaz: true
} */

function adicionarFilme(novoFilme)
{
  catalogo.push(novoFilme);
}

/* function buscarFilme(indice, catalogo)
{
  for(var i = 0; i < catalogo.length; i++ )
  {
    if(catalogo[i].codigo == indice)
    {
      console.log('O título buscado é: ' + catalogo[i].titulo + '.');
      break;
    }
    else if(i == catalogo.length-1)
    {
      console.log('Não existe item com o codigo informado no catalogo');
    }
  }
} */

function buscarFilme(codigo) {
    return catalogo.find((filme) => {
        return filme.codigo === codigo // true || false
    })
}

adicionarFilme({
    codigo: 3,
    titulo: 'Homem Aranha ',
    duracao: 3.5,
    atores: ['fulano 1', 'fulano 2', 'fulano 3'],
    anoLancamento: 2021,
    emCartaz: false
});
/* unction alterarStatusEmCartaz(indice)
{
  for(let i = 0; i < catalogo.length; i++)
  {
    if(catalogo[i].codigo == indice)
    {
      if(catalogo[i].emCartaz == true)
      {
        catalogo[i].emCartaz = false;
        break;
      }
      if(catalogo[i].emCartaz == false)
      {
        catalogo[i].emCartaz = true;
        break;
      }
    }
    else{
      continue;
    }
  }
} */

const alterarStatusEmCartaz = (codigo) => {
  const filmeEncontrado = filmes.find((filme) => {
      return filme.codigo === codigo
  });

  filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz;
  console.log(filmeEncontrado);
}

function listarTodosOsFilmes()
{
  for(let i = 0; i < catalogo.length; i++)
  {
    //console.log(catalogo[i]);
    console.log('Nome do filme: ' + catalogo[i].titulo);
    console.log('Ano de Lançamento: ' + catalogo[i].anoLancamento);
    console.log('Duração: ' + catalogo[i].duracao);
    console.log('Está em cartaz?' + (catalogo[i].emCartaz ? 'O filme está em cartas!' : 'O filme não está mais em cartaz'));
    console.log(' ')
  }
}
function listarFilmesEmCartaz()
{
  for(let i = 0; i < catalogo.length; i++)
  {
    if(catalogo[i].emCartaz)
    {
        console.log('Nome do filme: ' + catalogo[i].titulo);
        console.log('Ano de Lançamento: ' + catalogo[i].anoLancamento);
        console.log('Duração: ' + catalogo[i].duracao);
        console.log(' ')
    }
  }
}
function listarFilmesLongaDuracao()
{
  let catalogoLongo = []
  for(let i in catalogo)
  {
    if(catalogo[i].duracao>= 2)
    {
      catalogoLongo.push(catalogo[i]);
    }
  }
}
/* const filmeEncontrado = buscarFilme(1);

filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz
console.log('Filme encontrado: ', filmeEncontrado); */
//adicionarFilme(filme1, catalogo);
//adicionarFilme(filme2, catalogo);
//console.log(catalogo);
//buscarFilme(0, filmes);
//console.log(cinema);
//alterarStatusEmCartaz(0, filmes);
//alterarStatusEmCartaz(1, filmes);
//console.log(filmes);
//listarTodosOsFilmes();
listarFilmesEmCartaz();
console.log(listarFilmesLongaDuracao);
//const cine = require('./pkgcine');

//console.log(cine);
