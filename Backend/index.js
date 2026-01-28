import express from "express";
const app = express();   
import todoRoutes from "./route/todoRoutes.js"
import connectDB from "./config/todoDb.js"; //database connection
connectDB();
import cors from "cors";



// -------------------- Middleware --------------------
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// -------------------- Routes --------------------

app.use("/api/todos", todoRoutes);






// -------------------- Server --------------------
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
