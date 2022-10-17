let nomeEventoInp = document.getElementById('nomeEvento')
let nomeConvidadoInp = document.getElementById('nomeConvidado')
let parentescoSlc = document.getElementById('parentesco')
let amizadeSlc = document.getElementById('amizade')
let relacionamentoSlc = document.getElementById('relacionamento')
let adicionaBtn = document.getElementById('adicionaBtn')
let listaUl = document.getElementById('lista')
let pontuacao = 0

adicionaBtn.addEventListener('click', function(e) { 
    e.preventDefault()
    pontuaçãoProximidade(parentescoSlc.value)
    pontuaçãoProximidade(amizadeSlc.value)
    pontuaçãoProximidade(relacionamentoSlc.value)
    exibeConteudo()
    limpaCampos()}
)

function limpaCampos() {
    nomeConvidadoInp.value = ''
    parentescoSlc.value = ''
    amizadeSlc.value = ''
    relacionamentoSlc.value = ''
    pontuacao = 0
}

function exibeConteudo(){
    let convidadoLista = (`${nomeConvidadoInp.value} ${parentesco.value} ${amizade.value} ${relacionamento.value} ${pontuacao}`)
    let li = document.createElement('li')
    li.textContent = convidadoLista
    listaUl.appendChild(li)
    console.log(convidadoLista)
}

function pontuaçãoProximidade(dado){
    
    if(dado == 'Parente proximo' || dado == 'Melhor amigo' || dado == 'Esposo (a)'){
        pontuacao = pontuacao + 5
    }
    if(dado == 'Parente distante' || dado == 'Amigo' || dado == 'Namorado (a)'){
        pontuacao = pontuacao + 3
    }
    console.log(pontuacao)
}


if(dado == 'Parente proximo'){
    pontuacao = pontuacao + 5

}else if(dado == 'Melhor amigo'){
    pontuacao = pontuacao + 5

}else (ifdado == 'Esposo (a)'){
    pontuacao = pontuacao + 5

}