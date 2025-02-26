function validarFormulario(event) {
    event.preventDefault();

    let nome = document.getElementById('Nome').value;
    let cpf = document.getElementById('CPF').value;
    let dataNascimento = document.getElementById('DataNasc').value;
    let telefone = document.getElementById('Celular').value;
    let email = document.getElementById('email').value;

    let valido = true;

    // validacao nome
    if (nome.length > 100 || nome.length == 0) {
        document.getElementById('nomeErro').innerText = 'Verifique o nome.';
        valido = false;  
    } else {
        document.getElementById('nomeErro').innerText = '';
    }
    
    // validacao cpf
    let regexCPF = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;
    if (!regexCPF.test(cpf)) {
        document.getElementById('cpfErro').innerText = 'Por favor, insira um CPF válido (formato: xxx.xxx.xxx-xx).';
        valido = false;
    } else {
        document.getElementById('cpfErro').innerText = '';
    }
        
    // validacao data de nascimento
    if (!dataNascimento || dataNascimento.length == 0) {
        document.getElementById('dataNascErro').innerText = 'Por favor, selecione a data de nascimento.';
        valido = false;  
    } else {
        document.getElementById('dataNascErro').innerText = '';
    }
    
    // validacao telefone

    // Remover qualquer caractere não numérico antes de validar
    let celularLimpo = telefone.replace(/\D/g, '');

    // Expressão regular para o formato (xx) xxxxx-xxxx
    let regexCelular = /^(\d{2})(\d{5})(\d{4})$/;

    if (!regexCelular.test(celularLimpo)) {
        document.getElementById('celularErro').innerText = 'Por favor, insira um número de celular válido (formato: (xx) xxxxx-xxxx).';
        valido = false;  
    } else {
        document.getElementById('celularErro').innerText = '';
    }

    // validacao email
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(email)) {
        document.getElementById('emailErro').innerText = 'Por favor, insira um e-mail válido.';
        valido = false;  
    } else {
        document.getElementById('emailErro').innerText = '';
    }

}



//evento para validar o cadastro
document.getElementById('formCadastroPaciente').addEventListener('submit', validarFormulario);