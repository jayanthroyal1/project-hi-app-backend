const Todo = require("../models/Todo");

const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({
      title,
      user: req.user.id,
    });
    res.status(201).json({
      success: true,
      message: "Created todo successfully",
      data: todo,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json({
      success: true,
      message: "Feteched User todo successfully",
      data: todos,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({
      _id: req.params.id,
      user: req.user.id, // ownership validation
    });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found!",
      });
    }

    todo.title = req.body.title ?? todo.title;

    if (req.body.completed !== undefined) {
      todo.completed = req.body.completed;
    }
    await todo.save();

    return res.status(200).json({
      success: true,
      message: "Updated Todo Successfully",
      data: todo,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!todo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Todo Deleted Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { createTodo, getTodos, updateTodo, deleteTodo };
