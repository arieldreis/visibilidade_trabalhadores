import express from 'express'
import { dados } from './API_Test.js'
import cors from 'cors'

const APP = express();
const PORT = 3000;

APP.use(cors({
    origin: "http://localhost:5174"
}));

APP.get('/listarDados', (req, res) => {
    try{
        res.json(dados);
    } catch(error) {
        console.log("Erro:", error)
    }
});
APP.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});