import express from 'express';
import { createProprietario, getProprietarios, updateProprietario, deleteProprietario } from "../controller/proprietario_controller.js";
const router = express.Router();

router.post('/proprietarios', createProprietario);
router.get('/proprietarios', getProprietarios);
router.put('/proprietarios/:cpf', updateProprietario);
router.delete('/proprietarios/:cpf', deleteProprietario);

export default router;
