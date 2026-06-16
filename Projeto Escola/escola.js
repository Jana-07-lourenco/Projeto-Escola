document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-idea-btn');
    const inputField = document.getElementById('new-idea-input');
    const ideasList = document.getElementById('ideas-list');

    // Função responsável por construir e adicionar o novo elemento
    function addIdea() {
        const text = inputField.value.trim();
        
        // Impede a adição caso o input esteja vazio
        if (text === '') return;

        // Gera um ID único baseado na data e hora atual
        const itemId = 'dynamic_' + Date.now();
        
        // Cria a div contentora com a classe padrão do Notion
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        
        // Injeta a estrutura do checkbox e do texto digitado
        todoItem.innerHTML = `
            <input type="checkbox" id="${itemId}">
            <span>${text}</span>
        `;
        
        // Anexa o novo elemento na lista existente
        ideasList.appendChild(todoItem);
        
        // Limpa a caixa de texto para a próxima entrada
        inputField.value = '';
    }

    // Aciona a função ao clicar no botão "Adicionar"
    addBtn.addEventListener('click', addIdea);

    // Aciona a função também se o utilizador pressionar a tecla "Enter" dentro do input
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addIdea();
        }
    });
});

const ctx = document.getElementById('graficoDesempenho').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Resenha', 'Trabalho Grupo', 'Prova 1'],
        datasets: [{
            label: 'Sua Nota',
            data: [7.0, 9.5, 8.0],
            borderColor: '#4A90E2',
            tension: 0.1
        }]
    }
});

function verificarDificuldade() {
    const select = document.getElementById('nivel-dificuldade').value;
    const alerta = document.getElementById('alerta-mentoria');

    if (select === 'dificil') {
        alerta.style.display = 'block'; // Mostra a mensagem do Felipe
    } else {
        alerta.style.display = 'none';
    }
}

// Dados simulados vindos do banco de dados do Notion
const tarefasNotion = [
    { nome: "Exercício Prático UI/UX", prazo: "18/Junho/2026", status: "Não iniciado" },
    { nome: "Estudo de Caso Persona", prazo: "25/Junho/2026", status: "Em andamento" }
];

function carregarTarefasNotion() {
    const container = document.getElementById('lista-atividades-notion');
    container.innerHTML = ""; // Limpa a tabela

    tarefasNotion.forEach((tarefa, index) => {
        container.innerHTML += `
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px;">${tarefa.nome}</td>
                <td>${tarefa.prazo}</td>
                <td><span style="background: #ffeeba; padding: 3px 8px; border-radius: 4px;">${tarefa.status}</span></td>
                <td>
                    <input type="file" id="arquivo-${index}" style="font-size: 12px;">
                    <button onclick="entregarTarefa(${index})" style="background: #28a745; color: white; border: none; padding: 4px 8px; border-radius: 3px; cursor: pointer;">Entregar</button>
                </td>
            </tr>
        `;
    });
}

function entregarTarefa(index) {
    alert(`Sucesso! A atividade "${tarefasNotion[index].nome}" foi enviada para avaliação.`);
}

// Executa a função assim que a página abre
carregarTarefasNotion();

function adicionarInteresse() {
    const input = document.getElementById('novo-interesse');
    const lista = document.getElementById('lista-interesses');

    if (input.value.trim() !== "") {
        const novoItem = document.createElement('li');
        novoItem.textContent = input.value;
        novoItem.style.padding = "5px 0";
        novoItem.style.borderBottom = "1px dashed #eee";

        lista.appendChild(novoItem);
        input.value = ""; // Limpa a caixa de texto
        alert("Sugestão enviada com sucesso aos professores!");
    } else {
        alert("Por favor, digite um tema antes de enviar.");
    }
}
