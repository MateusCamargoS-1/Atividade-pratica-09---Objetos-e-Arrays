const pessoas = [];

function cadastrarPessoa() {
    const pessoa = {
        nome: document.getElementById('nome').value,
        idade: parseInt(document.getElementById('idade').value),
        trabalhando: document.getElementById('trabalhando').checked,
        salario: 0,
    };

    if (pessoa.trabalhando) {
        pessoa.salario = parseFloat(document.getElementById('salario').value);
    }
    
    pessoas.push(pessoa);
    limparFormulario();
    atualizarLista();
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
    document.getElementById('trabalhando').checked = false;
    document.getElementById('salario').value = '';
    document.getElementById('salarioDiv').style.display = 'none';
}

function atualizarLista() {
    const listaPessoas = document.getElementById('listaPessoas');
    listaPessoas.innerHTML = '';

    const desempregadas = pessoas.filter(pessoa => !pessoa.trabalhando);
    const menos2500 = pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario < 2500);
    const mais2500 = pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario >= 2500);

    listaPessoas.innerHTML += '<h2>Pessoas desempregadas:</h2>';
    desempregadas.forEach(pessoa => listaPessoas.innerHTML += `<p>Nome: ${pessoa.nome}, Idade: ${pessoa.idade}</p>`);

    listaPessoas.innerHTML += '<h2>Pessoas empregadas com salários menores que 2500:</h2>';
    menos2500.forEach(pessoa => listaPessoas.innerHTML += `<p>Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}</p>`);

    listaPessoas.innerHTML += '<h2>Pessoas empregadas com salários maiores ou iguais a 2500:</h2>';
    mais2500.forEach(pessoa => listaPessoas.innerHTML += `<p>Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}</p>`);
}

document.getElementById('trabalhando').addEventListener('change', function () {
    const salario = document.getElementById('salarioDiv');
    salario.style.display = this.checked ? 'block' : 'none';
});