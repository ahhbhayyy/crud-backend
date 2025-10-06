import express from 'express';
import cors from 'cors'
import dotenv from "dotenv"; 
import clientRoutes from "./routes/clientRoutes.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', clientRoutes);

app.listen(port, () => {
    console.log("listening on port 3000")
});