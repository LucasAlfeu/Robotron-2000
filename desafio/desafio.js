const botao = document.querySelectorAll('button')


botao.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
        exibeTintas(event.target.dataset.botao)
    })
})

function exibeTintas(dataset) {
    const lista = document.querySelector('[data-lista]')
    if(dataset == 'esconde'){
        lista.classList.add('fadeOut')
    } else {
        setTimeout(function() {
            lista.classList.remove('fadeOut')
        }, 500);
        
    }
}