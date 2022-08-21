const containerTransacoes = document.querySelectorAll('.container-transacoes');

class InicioBanco {

    // função para exibir o saldo do cliente 
    verSaldo() {
        const mostrarSaldo = document.querySelector('#verSaldo');
        const saldo = document.querySelector('.valor');
        mostrarSaldo.addEventListener('click', () => saldo.classList.toggle('hide'))
    }

    //abrir area pix
    btnAbrirServicos() {
        const areapix = document.querySelector('#area-pix');
        const abrirAreaPix = document.querySelector('#pix');
        const areaBoletos = document.querySelector('#area-boletos')
        const abrirAreaBoletos = document.querySelector('#boleto');

        // abrirAreaPix.addEventListener('click', () => areapix.style.display = 'flex');
        abrirAreaPix.addEventListener('click', function () {
            if (areaBoletos.style.display == 'flex') {
                areaBoletos.style.display = 'none';
                areapix.style.display = 'flex'
            } else {
                areapix.style.display = 'flex'
            }
        })

        abrirAreaBoletos.addEventListener('click', function () {
            if (areapix.style.display == 'flex') {
                areapix.style.display = 'none';
                areaBoletos.style.display = 'flex'
            } else {
                areaBoletos.style.display = 'flex'
            }
        })
    }
    //botao de encerrar area de transacoes
    btnFecharServicos() {
        const fechartransacoes = document.querySelectorAll('.btn-fechar-transacoes');
        fechartransacoes.forEach((fechar) =>
            fechar.addEventListener('click', () => containerTransacoes.forEach((fechar2) =>
                fechar2.style.display = 'none'))
        )
    }

    //botao transferir
    transferencia() {
        const transferir = document.querySelector('.fa-money-bill-transfer');
        const areaDeTransferencia = document.querySelector('#transferir');
        transferir.addEventListener('click', function () {
            areaDeTransferencia.classList.toggle('hide')
        })

    }
    //retorna a fatura paga com um display check
    btnConfirmarTransf() {
        const confirmarTransferencia = document.querySelector("#btn-confirmar-transferencia")
        const transferenciaCheck = document.querySelector('#transferenciaCheck')

        confirmarTransferencia.addEventListener('click', () => transferenciaCheck.classList.toggle('hide'))

    }

    pagarContas() {
        const faturaDoCartao = document.getElementById('fatura-cartao');
        const contaAgua = document.getElementById('conta-agua');
        const pagarCartao = document.getElementById('pagar-cartao')
        const pagarContaAgua = document.getElementById('pagar-conta-agua')

        faturaDoCartao.addEventListener('click', function () {
            if (pagarContaAgua.classList === ('hide')) {
                pagarCartao.classList.toggle('hide')
            } else {
                pagarContaAgua.classList.add('hide')
                pagarCartao.classList.toggle('hide')
            }
        })

        contaAgua.addEventListener('click', function () {
            if (pagarCartao.classList === ('hide')) {
                pagarContaAgua.classList.toggle('hide')
            } else {
                pagarCartao.classList.add('hide')
                pagarContaAgua.classList.toggle('hide')
            }
        })
    }
    //pega a data atual e lança no vencimento da fatura
    dataAtual() {
        const date = new Date()

        const dia = String(date.getDate()).padStart(2, '0');
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const ano = date.getFullYear()

        let dataHoje = document.querySelectorAll('.data')

        for (let i = 0; i < dataHoje.length; i++) {
            dataHoje[i].innerText += `${dia}/${mes}/${ano}`
        }
    }
}

//inicio do método
let cliente = new InicioBanco();
//cahamada dos metodos
cliente.verSaldo();
cliente.btnAbrirServicos();
cliente.btnFecharServicos();
cliente.transferencia();
cliente.btnConfirmarTransf();
cliente.dataAtual();
cliente.pagarContas();