import express from 'express';
import bcrypt from 'bcrypt'; 
import { connection as db } from '../config/connection.js';

export const getAll = async (req, res) => {
    try{
        const { data, error } = await db.from("RegisterUser").select("*");
        if( error ){
            console.error("Erro de acesso aos dados: ", error.message);
        } else {
            console.log( data );
            return res.status(200).json(data);
        }
    } catch ( error ) {
        console.error("Erro ao realizar a requisição: ", error);
        res.status(500).json({
            status: 500,
            message: "Erro inesperado no servidor."
        });
    }
};
export const getById = (req, res) => {};
export const create = (req, res) => {};
export const update = (req, res) => {};
export const remove = (req, res) => {};
