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

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser){
        dadosLista.push(nomeUser);
       console.log(dadosLista);
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
        table += "<tr><td>" + dadosLista[i] + "</td><td><button type='bytton' onclick='editar(this.parentNode.parentNode.rowIndex'>Editar</button></td></tr>";
        document.getElementById('table').innerHTML = table;
    }
}

// FUNÇÃO PARA EDITAR NOMES DA LISTA
function editar(i){
    document.getElementById('nomeUer').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1)], 1);
}