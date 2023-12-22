// * app.get('/api/v1/tasks')           - get all the tasks
// * app.post('/api/v1/tasks')          - create a new task
// * app.get('/api/v1/taks/:id')        - get single task
// * app.patch('/api/v1/taks/:id')      - update task
// * app.delete('/api/v1/taks/:id')     - delete task

require("dotenv").config();
const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Replace with your actual frontend origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      3000,
      console.log(`Connected, server is listening on port 3000...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
