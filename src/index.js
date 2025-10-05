import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"; 
import path from "path";
import { fileURLToPath } from "url";
import clientRoutes from "./routes/clientRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Needed to resolve paths when using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', clientRoutes);

// Serve React frontend
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Catch-all: send index.html for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
