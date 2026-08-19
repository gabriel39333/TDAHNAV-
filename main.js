// --- REDIRECIONAMENTO DE NAVEGAÇÃO ---
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// --- CONTROLE DE ABAS ---
function openTab(evt, tabName, colorClass) {
    let tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    let tabLinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active", "active-amber", "active-teal", "active-purple");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    if (colorClass) {
        evt.currentTarget.classList.add(colorClass);
    }
}

// --- SIMPLIFICADOR DE TEXTO ---
function simplificarTexto() {
    const input = document.getElementById('simplificadorInput').value.trim();
    const resultBox = document.getElementById('simplificadorResult');

    if (!input) {
        alert('Por favor, cole um texto para simplificar.');
        return;
    }

    // Processa o texto quebrando por frases/pontuação
    const frases = input.split(/[.!?\n]+/).filter(f => f.trim().length > 0);

    let html = '<h4 style="color: var(--accent-amber); margin-bottom: 12px;">📌 Versão Simplificada:</h4><ul>';
    frases.forEach((frase, index) => {
        html += `<li><span>🔹</span> <span>${frase.trim()}.</span></li>`;
    });
    html += '</ul>';

    resultBox.innerHTML = html;
    resultBox.classList.remove('hidden');
}

// --- DECOMPOSITOR DE TAREFAS ---
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

function decomporTarefa() {
    const input = document.getElementById('taskInput').value.trim().toLowerCase();
    const resultBox = document.getElementById('decompositorResult');

    let passos = [];

    // Gerador dinâmico de passos conforme palavras-chave
    if (input.includes('pagar') || input.includes('conta')) {
        passos = [
            'Abrir o aplicativo do seu banco no celular.',
            'Procurar a opção "Pagar" ou "PIX / Código de Barras".',
            'Escanear a conta ou colar o código impresso.',
            'Conferir o valor e o nome do recebedor.',
            'Confirmar com sua senha e salvar o comprovante.'
        ];
    } else if (input.includes('cancelar') || input.includes('assinatura')) {
        passos = [
            'Fazer login na plataforma do serviço.',
            'Ir em "Minha Conta" ou "Configurações".',
            'Procurar a aba "Planos" ou "Assinatura".',
            'Clicar em "Cancelar Assinatura" (ignore as ofertas de retenção).',
            'Aguardar o e-mail de confirmação do cancelamento.'
        ];
    } else if (input.includes('formulario') || input.includes('preencher')) {
        passos = [
            'Separar seus documentos principais (CPF/RG).',
            'Preencher primeiro os dados pessoais básicos.',
            'Revisar se todos os campos com asterisco (*) estão preenchidos.',
            'Clicar em "Enviar" ou "Avançar".',
            'Tirar foto/print da tela de confirmação.'
        ];
    } else {
        passos = [
            `Identificar o objetivo principal de "${input}".`,
            'Separar os materiais/documentos necessários.',
            'Executar a primeira etapa em menos de 5 minutos.',
            'Revisar o resultado parcial.',
            'Concluir o passo final e registrar.'
        ];
    }

    let html = '<h4 style="color: var(--accent-teal); margin-bottom: 12px;">✅ Checklist Passo a Passo:</h4>';
    passos.forEach((passo, index) => {
        html += `
            <div class="check-item" onclick="toggleCheck(this)">
                <input type="checkbox" id="step-${index}">
                <label for="step-${index}"><strong>Passo ${index + 1}:</strong> ${passo}</label>
            </div>
        `;
    });

    resultBox.innerHTML = html;
    resultBox.classList.remove('hidden');
}

function toggleCheck(container) {
    const checkbox = container.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
        container.classList.add('completed');
    } else {
        container.classList.remove('completed');
    }
}

// --- COPIAR PROMPTS ---
function copyPrompt(buttonElement, text) {
    navigator.clipboard.writeText(text).then(() => {
        buttonElement.innerText = "Copiado!";
        buttonElement.classList.add('copied');

        setTimeout(() => {
            buttonElement.innerText = "Copiar";
            buttonElement.classList.remove('copied');
        }, 2500);
    }).catch(err => {
        alert('Erro ao copiar prompt.');
    });
}