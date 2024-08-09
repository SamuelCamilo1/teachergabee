// Função para alternar a exibição do conteúdo adicional nos cartões
function toggleContent(id) {
    var element = document.getElementById(id);  // Seleciona o elemento pelo ID
    var card = element.parentNode;  // Pega o elemento pai (o cartão)
    
    // Verifica se o conteúdo adicional está visível
    if (element.style.display === 'block') {
        element.style.display = 'none';  // Esconde o conteúdo
        card.classList.remove('active');  // Remove a classe 'active' do cartão
    } else {
        element.style.display = 'block';  // Mostra o conteúdo
        card.classList.add('active');  // Adiciona a classe 'active' ao cartão
    }
}

// Mostrar/ocultar a barra de contato com base no scroll da página
window.addEventListener('scroll', function() {
    var contactBar = document.querySelector('.contact-bar');  // Seleciona a barra de contato
    // Verifica se o usuário rolou a página mais de 100px
    if (window.scrollY > 100) {
        contactBar.classList.add('show');  // Mostra a barra de contato
    } else {
        contactBar.classList.remove('show');  // Esconde a barra de contato
    }
});
