// Import express
import express from "express";
// Import Controller TodoList
import {
    getTodoList,
    getTodoListById,
    createTodoList,
    updateTodoList,
    deleteTodoList
} from "../controllers/todo.js";

// Init express router
const router = express.Router();

// Route get semua todolist
router.get('/todo', getTodoList);
// Route get todolist by id
router.get('/todo/:id', getTodoListById);
// Route create todolist baru
router.post('/todo', createTodoList);
// Route update todolist by id
router.put('/todo/:id', updateTodoList);
// Route delete todolist by id
router.delete('/todo/:id', deleteTodoList);

// export router
export default router;