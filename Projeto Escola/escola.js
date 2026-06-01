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