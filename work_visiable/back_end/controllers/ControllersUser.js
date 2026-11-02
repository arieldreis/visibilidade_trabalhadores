import bcrypt from 'bcrypt';
import { connection as db } from '../config/connection.js';

const sendDatabaseError = (res, error) => {
    console.error('Erro ao acessar o banco de dados:', error.message);
    return res.status(500).json({ status: 500, message: 'Erro ao acessar o banco de dados.' });
};

export const getAll = async (_req, res) => {
    try {
        const { data, error } = await db.from('RegisterUser').select('*');
        if (error) return sendDatabaseError(res, error);
        return res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        return res.status(500).json({ status: 500, message: 'Erro inesperado no servidor.' });
    }
};

export const getById = async (req, res) => {
    try {
        const { data, error } = await db.from('RegisterUser').select('*').eq('id_register', req.params.id).maybeSingle();
        if (error) return sendDatabaseError(res, error);
        if (!data) return res.status(404).json({ status: 404, message: 'Usuário não encontrado.' });
        return res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        return res.status(500).json({ status: 500, message: 'Erro inesperado no servidor.' });
    }
};

export const createUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
        return res.status(400).json({ status: 400, message: 'Informe nome, email e senha.' });
    }
    try {
        const senhaHash = await bcrypt.hash(senha, 10);
        const { data, error } = await db.from('RegisterUser')
            .insert([{ nome, email, senha: senhaHash }]).select().single();
        if (error) return sendDatabaseError(res, error);
        return res.status(201).json(data);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return res.status(500).json({ status: 500, message: 'Erro inesperado no servidor.' });
    }
};

export const createService = async (req, res) => {
    const { typeService, MinValue, MaxValue, cidade, telefone } = req.body;
    if (!typeService || !cidade || !telefone) {
        return res.status(400).json({ status: 400, message: 'Informe o serviço, a cidade e o telefone.' });
    }
    try {
        const { data, error } = await db.from('RegisterService')
            .insert([{ typeService, MinValue, MaxValue, cidade, telefone }]).select().single();
        if (error) return sendDatabaseError(res, error);
        return res.status(201).json(data);
    } catch (error) {
        console.error('Erro ao criar serviço:', error);
        return res.status(500).json({ status: 500, message: 'Erro inesperado no servidor.' });
    }
};

export const update = async (req, res) => {
    const { id } = req.params;
    const campos = { ...req.body };
    if ('senha' in campos) campos.senha = await bcrypt.hash(campos.senha, 10);
    delete campos.id_register;
    if (Object.keys(campos).length === 0) {
        return res.status(400).json({ status: 400, message: 'Informe ao menos um campo para atualizar.' });
    }
    try {
        const { data, error } = await db.from('RegisterUser').update(campos)
            .eq('id_register', id).select().maybeSingle();
        if (error) return sendDatabaseError(res, error);
        if (!data) return res.status(404).json({ status: 404, message: 'Usuário não encontrado.' });
        return res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        return res.status(500).json({ status: 500, message: 'Erro inesperado no servidor.' });
    }
};

export const remove = async (req, res) => {
    try {
        const { data, error } = await db.from('RegisterUser').delete()
            .eq('id_register', req.params.id).select().maybeSingle();
        if (error) return sendDatabaseError(res, error);
        if (!data) return res.status(404).json({ status: 404, message: 'Usuário não encontrado.' });
        return res.status(200).json({ message: 'Usuário removido com sucesso.', data });
    } catch (error) {
        console.error('Erro ao remover usuário:', error);
        return res.status(500).json({ status: 500, message: 'Erro inesperado no servidor.' });
    }
};
