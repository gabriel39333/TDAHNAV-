function openTab(evt, tabName) {
    // Esconde todos os conteúdos das abas
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Remove a classe "active" de todos os botões
    let tabLinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }

    // Mostra a aba atual e adiciona a classe "active" ao botão clicado
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}