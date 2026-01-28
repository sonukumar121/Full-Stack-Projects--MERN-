import Todo from "../model/Todo.js";

// GET todos for a user
export const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(400).send("Error fetching todos");
  }
};



// ADD new todo
export const addTodo = async (req, res) => {
  try {
    const data = req.body;
    const todo = await Todo.create(data);
    res.json({ message: "Todo created successfully", todo });
  } catch (error) {
    res.status(400).send("Error creating todo");
  }
};



// DELETE todo
export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(400).send("Error deleting todo");
  }
};

// UPDATE todo
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
   
     res.json({ message: "Todo updated successfully", todo });
  } catch (error) {
    res.status(400).send("Error updating todo");
  }
};
