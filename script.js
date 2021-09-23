const form = document.getElementById('form');
const input = document.getElementById('input');
const todo = document.getElementById('todo');

form.addEventListener('submit',(e) => {

    e.preventDefault();

    const todoText = input.value;
    if(todoText)
    {
        const todoEl =document.createElement('li');
        todoEl.innerText = todoText;
        todoEl.addEventListener('click', function()
        {
            todoEl.classList.toggle('completed');
        });
        todoEl.addEventListener('contextmenu', function(e)
        {
            e.preventDefault();
            todoEl.remove();

        });
        todo.appendChild(todoEl);
        input.value("")
    }
})
