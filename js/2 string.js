//                   STRING


//length --- retorna a quantidade de caracteres 


var nameP= "Programador a Bordo";
console.log(nameP);


console.log(nameP.length);

//toUpperCase ---- converte o texto da String para letra maiúscula.

console.log(nameP.toUpperCase());

//ToLowerCase --- converte o texto da String para minúsculo

console.log(nameP.toLowerCase());

//indexOf ---- retorna busca pelo valor chamado, compara no código e vê a existência e a parametriza
//caso não houver, retprna índice menos 1, tendo retorna a partir de qual carácter existe.
console.log(nameP.indexOf('dor')); // retona 8 lá do Programa dor

console.log(nameP.indexOf("teste")); // não existe e retorna -1 no console.

// replace troca a primeira chamada texto ou num pelo segundo sendo: 1,2 = 2 return
console.log(nameP.replace('Programador', 'Igor'));

// slice é parametrizado a uma chamada. Posição inicial do contador até a final.

console.log(nameP.slice(3,8)) // pro grama dor --- de 3 ao 8 inicializando do 0

// -------------// 

//.trim retira os espaços da direita e esquerda

var networking= "   Linkedin  ";

console.log(networking);

// apricando o .trim

console.log(networking.trim()) // Muito usado em validações


//concatenação (juntar string com variável)

//2 modos

//modo 1


var author='Igor'
var tipoLivro="Best-seller"
console.log('O escritor dos melhores livros que misturam Economia e programação, chama-se  ' + author + ', ele ama escrever ' + tipoLivro)


//modo 2 usar aspas deitadas mais usual

console.log(`O escritor dos melhores livros que misturam Economia e programação, chama-se ${author} ele ama escrever ${tipoLivro}`)

