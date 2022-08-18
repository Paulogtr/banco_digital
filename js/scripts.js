const containerTransacoes = document.querySelectorAll('.container-transacoes');

class InicioBanco {

    // função para exibir o saldo do cliente 
    verSaldo() {
        const mostrarSaldo = document.querySelector('#verSaldo');
        mostrarSaldo.addEventListener('click', function () {
            const saldo = document.querySelector('.valor');

            if (saldo.style.display == 'none') {
                saldo.style.display = 'block';
            } else {
                saldo.style.display = 'none';
            }
        })
    }

    //abrir area pix
    btnAbrirAreaPix() {
        const areapix = document.querySelector('#area-pix');
        const abrirAreaPix = document.querySelector('#pix');
        const areaBoletos = document.querySelector('#area-boletos')
        const abrirAreaBoletos = document.querySelector('#boleto');

        abrirAreaPix.addEventListener('click', () => areapix.style.display = 'flex');
        
        abrirAreaBoletos.addEventListener('click', () => areaBoletos.style.display = 'flex');

    }
     //botao de encerrar area de transacoes
    btnFecharAreaPix() {
        const fechartransacoes = document.querySelectorAll('.btn-fechar-transacoes');
        fechartransacoes.forEach((fechar) =>
        fechar.addEventListener('click', () => containerTransacoes.forEach((fechar2)=>
        fechar2.style.display = 'none')  )   
        )
    }

    //botao transferir
    transferencia() {
        const transferir = document.querySelector('.fa-money-bill-transfer');
        transferir.addEventListener('click', function () {
            const areaDeTransferencia = document.querySelector('#transferir');

            if (areaDeTransferencia.style.display == 'none') {
                areaDeTransferencia.style.display = 'block';
            } else {
                areaDeTransferencia.style.display = 'none';
            }
        })
    }

    btnConfirmarTransf() {
        const confirmarTransferncia = document.querySelector("#btn-confirmar-transferencia")
        const transferenciaCheck = document.querySelector('#transferenciaCheck')

        confirmarTransferncia.addEventListener('click', () => transferenciaCheck.style.display = 'block')

    }

    dataAtual(){
        const date = new Date()
        
        const dia = String(date.getDate()).padStart(2, '0');
        const mes = String(date.getMonth() + 1).padStart(2,'0');
        const ano = date.getFullYear()

       let dataHoje = document.querySelectorAll('.data')

       for(let i = 0; i < dataHoje.length; i++){
         dataHoje[i].innerText += `${dia}/${mes}/${ano}`
        }
    }
}

//inicio do método
let cliente = new InicioBanco();
//cahamada dos metodos
cliente.verSaldo();
cliente.btnAbrirAreaPix();
cliente.btnFecharAreaPix();
cliente.transferencia();
cliente.btnConfirmarTransf();
cliente.dataAtual();