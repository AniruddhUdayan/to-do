window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');
  const input = document.querySelector('#new-task-input');
  const listEl = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;
    if (!task) {
      alert('Please enter your task');
      return;
    }

    const taskEl = document.createElement('div');
    taskEl.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    taskEl.appendChild(task_content_el);

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

    const task_action_el = document.createElement('button');
    task_action_el.classList.add('actions');

    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerHTML = 'Edit';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerHTML = 'Delete';

    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);

    taskEl.appendChild(task_action_el);

    listEl.appendChild(taskEl);
    input.value = '';

    task_edit_el.addEventListener('click', () => {
      if (task_edit_el.innerText.toLowerCase() == 'edit') {
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();
        task_edit_el.innerText = 'Save';
      } else {
        task_input_el.setAttribute('readonly', 'readonly');
        task_edit_el.innerText = 'Edit';
      }
    });

    task_delete_el.addEventListener('click', () => {
      listEl.removeChild(taskEl);
    });
  });
});
