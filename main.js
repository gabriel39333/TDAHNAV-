
function openTab(evt, tabName, colorClass) {

    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

  
    let tabLinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
        tabLinks[i].classList.remove("active-amber");
        tabLinks[i].classList.remove("active-teal");
        tabLinks[i].classList.remove("active-purple");
    }

    document.getElementById(tabName).classList.add("active");

    evt.currentTarget.classList.add("active");
    if(colorClass) {
        evt.currentTarget.classList.add(colorClass);
    }
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





function copyText(btnElement) {
  
    btnElement.innerText = "Copiado!";
    btnElement.style.backgroundColor = "#2b2d3d";
    btnElement.style.color = "#a0aabf";
    btnElement.style.border = "none";
    
    
    setTimeout(() => {
        btnElement.innerText = "Copiar";
        btnElement.style.backgroundColor = "transparent";
        btnElement.style.color = "var(--text-main)";
        btnElement.style.border = "1px solid var(--border-color)";
    }, 2000);
}