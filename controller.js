// VALIDAR ACESSO EM TELA DE LOGIN

function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if(!loginEmail || !loginSenha){
        alert("Favor preencher todos os campos");
    }else{
        //alert("Campos preenchidos com sucesso");    
        window.location.href ='cadastro.html';
    }

}

// FUNÇÃO QUE ARMAZENA EM ARRAY NOME NA TELA DE CADASTRO

var dadosLista = []; //var é uma palavra-chave em JavaScript usada para declarar variáveis//

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){

        dadosLista.push(nomeUser);
       //console.log(dadosLista);
       criaLista();
       document.getElementById('nomeUser').value ="";
    }else{
        alert("Favor informar o nome para cadastro");
    }
    
}
// FUNÇÃO PARA CRIAR LISTA
function criaLista(){
    let table = document.getElementById('table').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";

    for(let i = 0; i <= (dadosLista.length-1); i++){
        table += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button id='btnaltera' type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('table').innerHTML = table;
    }
}

// FUNÇÃO PARA EDITAR NOMES DA LISTA
function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1); // ele permite adicionar, remover ou substituir elementos em um array, e altera o array original. //
}

//FUNÇÃO PARA EXCLUIR NOME DA LISTA
function excluir(i){
    //comentário sobre splice
    dadosLista.splice((i-1),1);
    document.getElementById('table').deleteRow(i); //é utilizado para remover uma linha de uma tabela HTML em JavaScript//
}