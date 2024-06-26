import express from 'express';
import { listarVeiculos, createVeiculo, updateVeiculo, deleteVeiculo } from "../controller/veiculo_controller.js"
const router = express.Router();

router.post('/veiculos', createVeiculo);
router.get('/veiculos', listarVeiculos);
router.put('/veiculos/:placa_veiculo', updateVeiculo);
router.delete('/veiculos/:placa_veiculo', deleteVeiculo);

export default router;