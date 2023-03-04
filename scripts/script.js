const recuperarSenha = document.getElementById('bntEsqSenha');
recuperarSenha.addEventListener('click' ,() => {
    window.location.href = 'recuSenha.html';
});

function autenticacao() {
    let email = document.getElementById('iemail').value;
    let senha = document.getElementById('isenha').value;

    if (email === 'exemplo@gmail.com' && senha === '1234'){
            window.location.href = 'acesso.html';
    } else {
        window.alert('Email ou senha estão incorretos.');
    }
}

document.getElementById('bntEntrar').addEventListener('click', function(event) {
    event.preventDefault();
    autenticacao();
});