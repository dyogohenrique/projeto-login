const recuperarSenha = document.getElementById('bntEsqSenha');
recuperarSenha.addEventListener('click' ,() => {
    window.location.href = 'recuSenha.html';
});

function autenticacao() {
    let email = document.getElementById('iemail').value;
    let senha = document.getElementById('isenha').value;
    let resp = document.getElementById('res');

    if (email === 'exemplo@gmail.com' && senha === '1234'){
        window.location.href = 'acesso.html';
    } else {
        resp.innerHTML = `Email ou senha estão incorretos.`
    }
}

document.getElementById('bntPrinc').addEventListener('click', function(event) {
    event.preventDefault();
    autenticacao();
});