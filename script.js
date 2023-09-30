const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElement(tasks){
  const ulTaskList = document.querySelector(".tasks__list")
  for (let i = 0; i < tasks.length; i++){
    const task = tasks[i];
    const taskItem = createTaskItem(task)
    ulTaskList.append(taskItem)
  }
}

function createTaskItem(task){
  const liTaskItem = document.createElement("li");
  const divTaskInfo = document.createElement("div");
  const spanTaskType = document.createElement("span");
  const pTaskTitle = document.createElement("p");
  const buttonTaskButton = document.createElement("button");

  liTaskItem.append(divTaskInfo, buttonTaskButton)
  divTaskInfo.append(spanTaskType, pTaskTitle)

  liTaskItem.classList.add("task__item")
  divTaskInfo.classList.add("task-info__container")
  if (task.type == "Urgente"){
    spanTaskType.classList.add("task-type", "span-urgent")
  } else if (task.type == "Importante"){
    spanTaskType.classList.add("task-type", "span-important")
  } else {
    spanTaskType.classList.add("task-type", "span-normal")
  }
  pTaskTitle.innerText = task.title
  buttonTaskButton.classList.add("task__button--remove-task")
  return liTaskItem
}

const clickButton = document.querySelector(".form__button--add-task")

clickButton.addEventListener("click", function(event){
  event.preventDefault();
  const title = document.querySelector("#input_title").value;
  let type = document.querySelector(".form__input--priority").value;
  const newTask = {title, type};
  tasks.push(newTask);
  renderElement(tasks);
})