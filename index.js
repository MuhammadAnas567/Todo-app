const express = require("express");
const connectDB = require("./db");
const todoRoutes = require("./routes/Todoroutes");

const app = express();
const PORT = 5000;

connectDB();

app.use(express.json());
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
