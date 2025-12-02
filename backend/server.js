const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// DB connect
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/scores", scoreRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
