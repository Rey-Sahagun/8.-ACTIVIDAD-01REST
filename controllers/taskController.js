let tasks = [
    {
        id : 1, 
        title: "Tarea 1", 
        description: 'Descripción de la tarea 1',
    },
    {
        id : 2, 
        title: "Tarea 2", 
        description: 'Descripción de la tarea 2',
    },
    {
        id : 3, 
        title: "Tarea 3", 
        description: 'Descripción de la tarea 3',
    },
    {
        id : 4, 
        title: "Tarea 4", 
        description: 'Descripción de la tarea 4',
    },
];

function getAllTask(){
    return tasks;
}

function createTask(title,description){
    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };
    tasks.push(newTask);
    return newTask;
};

function deleteTask(id){
    const tasksExists = tasks.some(task => task.id === id);

    if (tasksExists){
        tasks = tasks.filter(task => task.id !== id);
        return true;
    }else {
        return false;
    }
}

function getTaskById(id){
    return tasks.find(task => task.id === id);
}

function updateTask(id, title, description){
    const task = tasks.find(task => task.id === id);

    if(task){
        task.title = title || task.title;
        task.description = description || task.description;
        return task
    } else {
        return null;
    }
}

module.exports = {
    getAllTask,
    createTask,
    deleteTask,
    updateTask,
    getTaskById
}