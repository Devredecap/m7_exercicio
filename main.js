const form = document.getElementById('form-comparar');

const valorA = document.getElementById('campoA');
const valorB = document.getElementById('campoB');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const mensagemSucesso = `Tudo certo, o número <b>${valorB.value}</b> é maior que o número <b>${valorA.value}</b>!`;

    const mensagemErro = `Tente novamente, o número <b>${valorB.value}</b> não é maior que o número <b>${valorA.value}!</b>`;

    //const formValido = valorB.value > valorA.value ? mensagemSucesso : mensagemErro;
    //alert(formValido);

    formValido = (valorB.value > valorA.value);

    if (formValido) {
        const msgContainer = document.querySelector('.sucess-message');
        msgContainer.innerHTML = mensagemSucesso;
        msgContainer.style.display = 'block';
        const msgContainer2 = document.querySelector('.erro-message').style.display = 'none';
        valorA.value = '';
        valorB.value = '';

    } else {
        const msgContainer = document.querySelector('.sucess-message').style.display = 'none';
        const msgContainer2 = document.querySelector('.erro-message');
        msgContainer2.innerHTML = mensagemErro;
        valorA.value = '';
        valorB.value = '';
    }
    //alert(formValido);
})



