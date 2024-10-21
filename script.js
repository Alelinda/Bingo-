// captura o id cartela do html e colocar no var
const cartelaDiv = document.getElementById('cartela')

const numerosSorteadosDiv = document.getElementById('numeroSorteados');

// array vazio p ser armazenados os valores sorteados
let numerosSorteados = []

const totalNumeros = 75;


//addEventListener é um evento escutador, evento é quando algo acontece, no nosso caso estamos progamando para quando apertar os botes
document.getElementById('renderizar').addEventListener('click', confirmarRenderizacao);

document.getElementById('sortear').addEventListener('click', sortearNumero)

function confirmarRenderizacao(){
    const confirmar = confirm ('Você tem certeza que deseja uma nova cartela?');

    if(confirmar){
        renderizarCartela();
    }
}

function renderizarCartela(){
    cartelaDiv.innerHTML = ''; // começa vazia
    const cartela = [];

    // enquanto for menor que 25 numeros, repita
    while (cartela.length < 25) {
        const numero = Math.floor(Math.random() * totalNumeros) + 1;
        if(!cartela.includes(numero)){
            cartela.push(numero)
        }
    }

    // sort organiza os numeros de menor p maior
    cartela.sort((a, b) => a - b)

    cartela.forEach(numero => {
        const div = document.createElement('div');
        div.className = 'numero';
        div.textContent = numero;

        div.addEventListener('click', () => {
            div.classList.toggle('clicado');
        })

        cartelaDiv.appendChild(div)
    });
}

function sortearNumero(){
    let numeroSorteado;

    do{
        numeroSorteado = Math.floor(Math.random() * totalNumeros) + 1
      } while ( numerosSorteados.includes(numeroSorteado));

      numerosSorteados.push(numeroSorteado);

      const span = document.createElement('span');
      span.classList = 'numero-sorteado';
      span.textContent = numeroSorteado;

      numerosSorteadosDiv.appendChild(span);
}