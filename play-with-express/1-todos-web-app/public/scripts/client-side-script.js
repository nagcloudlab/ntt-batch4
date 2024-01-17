


const top5TodosBtn = document.querySelector('#top5TodosBtn');
const todosTableBody = document.querySelector('#todosTableBody');

top5TodosBtn.addEventListener('click', () => {
    fetch('todos?limit=5')
        .then(response => response.json())
        .then(todos => {
            todosTableBody.innerHTML = '';
            todos.forEach(todo => {
                todosTableBody.innerHTML += `
                    <tr>
                        <td>${todo.id}</td>
                        <td>${todo.title}</td>
                        <td>${todo.completed}</td>
                    </tr>
                `;
            });
        });
});