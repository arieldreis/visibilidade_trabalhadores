import express from 'express';
import bcrypt from 'bcrypt'; 
import { connection as db } from '../config/connection.js';

export const getAll = async (req, res, NameTable) => {
    try{
        const { rows : data } = await db.from(NameTable).select("*");
        if(data){
            return res.json(data);
        }
    } catch ( error ){
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

// Calling the functions
getAll("RegisterUser");