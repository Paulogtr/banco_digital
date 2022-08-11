const verSaldo = document.querySelector('#verSaldo');
const saldo = document.querySelector('#valor')

verSaldo.addEventListener('click', function () {
    if (saldo.style.display == 'none') {
        saldo.style.display = 'block'
    } else {
        saldo.style.display = 'none'
    }
}) 