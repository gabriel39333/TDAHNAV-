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
function checkInput() {
    const input = document.getElementById('taskInput');
    const btn = document.getElementById('decomporBtn');
    if (input.value.trim() !== '') {
        btn.disabled = false;
        btn.classList.remove('disabled');
    } else {
        
        btn.disabled = true;
        btn.classList.add('disabled');
    }
}
function fillInput(text) {
    const input = document.getElementById('taskInput');
    input.value = text;
    checkInput(); 
    
    input.focus();
}