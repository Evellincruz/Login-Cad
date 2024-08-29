// FUNÇÃO PARA VALIDAR ACESSO NA TELA DE LOGIN
function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha) {
        // Exibe um alerta se algum dos campos estiver vazio
        alert("Favor preencher todos os campos");
    } else {
        // Redireciona para a página de cadastro se todos os campos estiverem preenchidos
        window.location.href = 'cadastro.html';
    }
}

// VARIÁVEIS GLOBAIS PARA ARMAZENAR DADOS DO USUÁRIO
var dadosLista = []; // Armazena os nomes dos usuários
var salvaEmail = []; // Armazena os e-mails dos usuários

// FUNÇÃO PARA SALVAR USUÁRIO NA LISTA
function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;
    let emailUser = document.getElementById('emailUser').value;

    if (nomeUser && emailUser) {
        // Adiciona os dados aos arrays correspondentes
        dadosLista.push(nomeUser);
        salvaEmail.push(emailUser);
        
        // Cria a lista atualizada na tela
        criaLista();

        // Limpa os campos após salvar
        document.getElementById('nomeUser').value = "";
        document.getElementById('emailUser').value = "";
    } else {
        // Exibe um alerta se algum campo estiver vazio
        alert("Favor preencher todos campos!");
    }
}

// FUNÇÃO PARA CRIAR A LISTA DE USUÁRIOS NA TELA
function criaLista() {
    let table = "<tr><th>Nome Usuário</th><th>E-mail</th><th>Ações</th></tr>";

    for (let i = 0; i < dadosLista.length; i++) {
        // Adiciona uma nova linha à tabela com os dados do usuário e os botões de ação
        table += "<tr><td>" + dadosLista[i] + "</td><td>" + salvaEmail[i] + "</td><td><button type='button' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
    }

    // Atualiza o conteúdo da tabela
    document.getElementById('table').innerHTML = table;
}

// FUNÇÃO PARA EDITAR DADOS NA LISTA
function editar(i) {
    // Ajusta o índice para acessar o item correto no array
    let index = i - 1;
    // Preenche os campos com os dados do item selecionado para edição
    document.getElementById('nomeUser').value = dadosLista[index];
    document.getElementById('emailUser').value = salvaEmail[index];

    // Remove o item editado dos arrays
    dadosLista.splice(index, 1);
    salvaEmail.splice(index, 1);

    // Atualiza a lista após a edição
    criaLista();
}

// FUNÇÃO PARA EXCLUIR USUÁRIO DA LISTA
function excluir(i) {
    // Ajusta o índice para acessar o item correto no array
    let index = i - 1;

    // Remove o item dos arrays
    dadosLista.splice(index, 1);
    salvaEmail.splice(index, 1);

    // Remove a linha correspondente da tabela
    document.getElementById('table').deleteRow(i - 1);
}
