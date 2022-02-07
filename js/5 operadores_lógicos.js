// operadores lógicos



// "       !           " quer dizer negação



var a=true;
var b=false;


console.log(a);// vai retornar true
console.log (!a); // vai retornar false, pois o ! nega o valor de afirmação.
console.log(b);// vai retornar false
console.log (!b); // vai retornar true, pois o ! nega o valor de afirmação.


// "       !!            " negação da negação

console.log(a);// vai retornar true
console.log (!!a); // vai retornar true, pois o !! nega o valor da afirmação da afirmação .
console.log(b);// vai retornar false
console.log (!!b); // vai retornar false, pois o !! nega o valor de afirmação da afirmação.

// valores naturalmente "false":    null, undefined,  '' ,  0
// naturalmente false, se tornarmos uma negação, volta como true. logo era false

console.log(null);// false
console.log(false);// false
console.log(0);// false
console.log(undefined);// false
console.log('');// false

// comprovando que é considerado false '!' 

console.log(!null);//true
console.log(!false);//true
console.log(!0);//true
console.log(!undefined);//true
console.log(!'');//true

// falsificando o falsificado (: volta ao original é tipo fazer e desfazer ' !! '

console.log(!!null);//false
console.log(!!false);//false
console.log(!!0);//false
console.log(!!undefined);//false
console.log(!!'');//false



// operador && faz comparação de operações e retorna como true ou false. Se tiver um 
//operador nativo false, vai retornar false na chamada
// todas as afirmações devem ser obrigatóriamente true

console.log(10>9 && 10<11); // isso é isso e aquilo é aquilo. Portanto retorna true (quando classe número)
console.log(10>11 && 10>9); // a primeira afirmação é false, invalidando o true da linha - retorna true

// && como string retorna a última chamada ou para quando tem nativo false retorna o nativo
console.log('passa' && 'dev');// retorna dev que é o último true


// atribuindo parâmetro false 
console.log('passa' && 0 && 'dev' );// retornou o 0, pois ele é false
console.log('passa' && 'dev' && undefined);// retornou undefined, pois ele é false
console.log(0 && 'passa' && 'dev' && null) // retornou 0. mesmo tendo undefined que é false. o zero aparece na ordem de leitura, logo o contador identifica o zero e encerra a busca.


// ou '||' - faz comparação e retorna primeiro valor de lida caso exista  verdadeiro ou 
// retorna o último false caso o verdadeiro ou texto não exista caso string
console.log(0 || '' || false || undefined || null || 'teste');
console.log(0 || '' || false || undefined || null) // retornou null, pois é o último false e não há verdadeiro
console.log('Brasil' || 0 || '' || false || undefined || null || 'teste')// retornou Brasil, pois é o primeiro verdadeiro
// na ordem de leitura

// ou '||' - faz comparação e retorna true ou false. Se uma afirmação for verdadeira retorna true, todas forem falsar retorna false
console.log(10<20 || 10>9); // retorna true, pois uma das operações é verdadeira
console.log(10<9 || 10<7)// retorna false, pois todas as afirmações são falsas


// misturando && e ||
// o operador && anula o || 

console.log('Programador' && 2050 || '' && 36); // retorna 2050, pois na chamada || te uma divisão e o restante é ignorado
console.log ('Programador' || '' && 30); // retorna Programador, pois o || corta o fluxo.
console.log ('Programador' && 'Igor' && 'JavaScript' && 'React.js' || 'Vue.js' && 'Node.js')// retorna
// React.js, pois foi o último true antes do corte pelo || ( caso de hierarquia do || e &&)

