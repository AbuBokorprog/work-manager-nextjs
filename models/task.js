const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "complete"],
    default: "pending",
  },
  addedDate: {
    type: Date,
  },
});

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);
export default Task;
