import express from 'express';
import bcrypt from 'bcrypt'; 
import { connection as db } from '../config/connection.js';

export const getAll = async (req, res) => {
    try{
        const { data, error } = await db.from("RegisterUser").select("*");
        if( error ){
            console.error("Error accessing data: ", error.message);
        } else {
            console.log( data );
            return res.status(200).json(data);
        }
    } catch ( error ) {
        console.error("Error processing request: ", error);
        res.status(500).json({
            status: 500,
            message: "Unexpected server error."
        });
    }
};
export const getById = async (req, res) => {
    const { id } = req.params;
    try {
        const { data, error } = await db.from("RegisterUser").select("*").eq("id_register", id).maybeSingle();
        if (error) {
            console.error("Erro de acesso aos dados: ", error.message);
            return res.status(500).json({
                status: 500,
                message: "Erro inesperado no servidor."
            });
        }
        if (!data) {
            return res.status(404).json({
                status: 404,
                message: "Usuário não encontrado."
            });
        }
        return res.status(200).json(data);
    } catch (error) {
        console.error("Erro ao realizar a requisição: ", error);
        return res.status(500).json({
            status: 500,
            message: "Erro inesperado no servidor."
        });
    }
};
export const createUser = async (req, res) => {
    const { nome, email, senha } = req.body;
    try{

    } catch ( error ){
        console.error("Erro ao realizar a requisição: ", error);
        res.status(500).json({
            status: 500,
            message: "Erro inesperado no servidor."
        });
    }
};
export const createService = async (req, res) => {
    const { typeService, MinValue, MaxValue, cidade, telefone } = req.body;
    try {

    } catch ( error ){
        console.error("Erro ao realizar a requisição: ", error);
        res.status(500).json({
            status: 500,
            message: "Erro inesperado no servidor."
        });
    }
};
export const update = async (req, res) => {};
export const remove = async (req, res) => {};
