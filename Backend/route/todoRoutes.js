import express from "express";
const Router = express.Router(); 
import {getTodo,addTodo,deleteTodo,updateTodo} from "../controller/todoController.js";
/* -------------------- GET ROUTES -------------------- */

Router.get("/",getTodo)
Router.post("/",addTodo)
Router.delete("/:id",deleteTodo)
Router.put("/:id",updateTodo)



export default  Router;

