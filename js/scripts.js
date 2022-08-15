const verSaldo = document.querySelector('#verSaldo');
const fecharAreaPix = document.querySelector('#fechar-area-pix')
const transferir = document.querySelector('.fa-money-bill-transfer')
const areapix = document.querySelector('#area_pix');
const abrirAreaPix = document.querySelector('#pix');


// função para exibir o saldo do cliente 
verSaldo.addEventListener('click', function () {
    const saldo = document.querySelector('#valor');

    if (saldo.style.display == 'none') {
        saldo.style.display = 'block'
    } else {
        saldo.style.display = 'none'
    }
}) 

//botao transferir
transferir.addEventListener('click', function(){
    const areaDeTransferencia = document.querySelector('#transferir');

    if( areaDeTransferencia.style.display == 'none'){
    areaDeTransferencia.style.display = 'block'
} else{
    areaDeTransferencia.style.display = 'none'
}
})

//abrir area pix
abrirAreaPix.addEventListener('click', () => areapix.style.display = 'flex')

//botao de encerrar area pix
fecharAreaPix.addEventListener('click',() => areapix.style.display = 'none')
