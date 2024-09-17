const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', (req, res)=> {
    const tasks = taskController.getAllTask();
    res.status(200).json(tasks);

});

router.post('/', (req, res)=> {
   const {title, description} = req.body;
   const newTask = taskController.createTask(title, description);
   res.status(200).json(newTask);
});

router.delete('/:id', (req, res)=> {
    const {id} = req.params;
    const deleteTask = taskController.deleteTask(parseInt(id));
    res.status(200).json(deleteTask);
});

router.get('/:id', (req, res)=> {{
    const {id} = req.params;
    const task = taskController.getTaskById(parseInt(id));
    
    if(task){
        res.status(200).json(task);
    } else {
        res.status(404).json({message: 'Tarea no encontrada'});
    }    
}
});

router.put('/:id', (req, res)=> {
    const {id} = req.params;    
    const {title, description} = req.body;
    const updateTask = taskController.updateTask(parseInt(id), title, description);
    
    if(updateTask) {
        res.status(200).json({message: 'Tarea actualizada', task: updateTask});
    } else {
        res.status(404).json({message: 'Tarea no encontrada'});
    }
    
    
});

module.exports = router;