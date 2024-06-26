import Veiculo from '../models/veiculo_models.js';
import TipoVeiculo from '../models/tipo_veiculo.js';

export const listarVeiculos = async (req, res) => {

    try {

        const veiculos = await Veiculo.findAll()
        res.send(veiculos)

    } catch (e) {

        console.log("Erro ao acessar a tabela de veículos:", e)

    }
};

export const createVeiculo = async (req, res) => {
    try {

        let id_tipo;

        if (req.body.preco_veiculo < 45000) {
            id_tipo = 1; // Popular

        } else if (req.body.preco_veiculo >= 45000 && req.body.preco_veiculo < 90000) {
            id_tipo = 2; // Luxo

        } else {
            id_tipo = 3; // Super Luxo
        }

        await Veiculo.create({ ...req.body, id_tipo });

        res.status(201).json({ message: 'Um novo registro foi inserido na tabela de veículos' });

    } catch (e) {

        console.log("Erro ao inserir um novo veículo:", e);

    }
};

export const updateVeiculo = async (req, res) => {
    try {
        const { placa_veiculo } = req.params;
        let id_tipo;

        if (req.body.preco_veiculo < 45000) {
            id_tipo = 1; // Popular

        } else if (req.body.preco_veiculo >= 45000 && req.body.preco_veiculo < 90000) {
            id_tipo = 2; // Luxo

        } else {
            id_tipo = 3; // Super Luxo
        }

        await Veiculo.update({ ...req.body, id_tipo }, { where: { placa_veiculo } });
        res.json({ message: `Veículo foi atualizado` });

    } catch (e) {
        console.log("Erro ao atualizar registro de veículo:", e);
 
    }
};

export const deleteVeiculo = async (req, res) => {

    try {

        const { placa_veiculo } = req.params;
        await Veiculo.destroy({ where: { placa_veiculo } });
        res.json({ message: `Veículo foi excluído` });

    } catch (e) {

        console.log("Erro ao excluir registro de veículo:", e);

    }
};
