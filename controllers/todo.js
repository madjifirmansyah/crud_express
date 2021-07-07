// Import model TodoList
import Todo from "../models/todo.js";

// Get semua TodoList
export const getTodoList = async(req, res) => {
    try {
        const todo = await Todo.findAll();
        res.send(todo);
    } catch (err) {
        console.log(err);
    }
}

// Get TodoList berdasarkan id
export const getTodoListById = async(req, res) => {
    try {
        const todo = await Todo.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(todo[0]);
    } catch (err) {
        console.log(err);
    }
}

// Create TodoList baru
export const createTodoList = async(req, res) => {
    try {
        await Todo.create(req.body);
        res.json({
            "message": "To Do List Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Update product berdasarkan id
export const updateTodoList = async(req, res) => {
    try {
        await Todo.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "To Do List Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete TodoList berdasarkan id
export const deleteTodoList = async(req, res) => {
    try {
        await Todo.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "To Do List Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}