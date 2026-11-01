import express from 'express';
import cors from 'cors';
import RegisterUser from './routes/UserRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use('/Users', RegisterUser);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:3000`);
});