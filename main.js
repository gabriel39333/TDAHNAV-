function openTab(evt, tabName) {
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }
    let tabLinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
document.querySelectorAll('.btn-copiar').forEach(button => {
  button.addEventListener('click', () => {
    const promptText = button.getAttribute('data-prompt');

    if (promptText) {
      navigator.clipboard.writeText(promptText).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copiado!';
        button.classList.add('copiado');

        setTimeout(() => {
          button.textContent = originalText;
          button.classList.remove('copiado');
        }, 2000);
      });
    }
  });
});
