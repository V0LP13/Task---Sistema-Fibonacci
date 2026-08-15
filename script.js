//Obtem o estado do botão da nossa Guia
const btnGerar = document.getElementById('btnGerar');

//Adicione o evento de click
btnGerar.addEventListener("click", gerarFibonacci);
//Função para retornar os termos da Sequencia de Fibonnaci
function gerarFibonacci() {
    // Obtem a quantidade de termos desejada pelo Usuario
    const quantidade = parseInt(document.getElementById('quantidade').value);

    //Onde Acontece uma Validação
    if (quantidade < 2 || quantidade > 67) {
        alert("Infome um valor entre 2 e 50")
        return;
    }

    // Inicia a sequencia com dopis primeiros temros
    const fibonacci = [1, 1]

    // Calcular os proximos Termos
    for(let i = 2;i < quantidade;i++){
        const proximo = fibonacci[i-1] + fibonacci[i-2]
        fibonacci.push(proximo)
        }

        //local onde os numeros serão exibidos

        const resultado = document.getElementById('resultado')

        //limpar os dados anteriores caso o usuario queira startar novamente

        resultado.innerHTML = ""

        //ler todo o array fibonacci e exibir o mesmo em tela

        fibonacci.forEach(
        (termo, indice) => {
            const div = document.createElement("div")
            
            div.className = "termo"

        //destaca termos maiores que 100
        if(termo > 100){
                div.classList.add("maior100")
        }

                        div.innerHTML = `<strong>${indice + 1}º termo </strong><br>${termo}`

                        resultado.appendChild(div)

                }
        )
}

function mudarTema() {
    document.body.classList.toggle("vermelho");
    document.body.classList.toggle("verde");
}

//gera automaticamente a sequencia ao abrir a pagina 

gerarFibonacci()
