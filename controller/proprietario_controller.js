import Proprietario from '../models/proprietario_models.js';

export const getProprietarios = async (req, res) => {

    try {

        const proprietarios = await Proprietario.findAll()
        res.send(proprietarios)

    } catch (e) {
        
        console.log("Erro ao acessar a tabela de proprietários:", e);
       
    }
}

export const createProprietario = async (req, res) => {

    try {

        await Proprietario.create(req.body);
        res.status(201).json({ message: 'Um novo registro foi inserido na tabela de proprietários' });

    } catch (e) {

        console.log("Erro ao inserir um novo proprietário:", e);
        
    }
}

export const updateProprietario = async (req, res) => {
    try {

        const { cpf } = req.params;
        await Proprietario.update(req.body, { where: { cpf } });
        res.json({ message: `Proprietário com CPF ${cpf} foi atualizado` });

    } catch (e) {

        console.log("Erro ao atualizar registro de proprietário:", e);
       
    }
}

export const deleteProprietario = async (req, res) => {
    try {

        const { cpf } = req.params;
        await Proprietario.destroy({ where: { cpf } });
        res.json({ message: `Proprietário com CPF ${cpf} foi excluído` });

    } catch (e) {

        console.log("Erro ao excluir registro de proprietário:", e);
        
    }
}
