import db from '../db.js';

export const listAutos = (id={}) => {
    return db('cars')
        .where(id)
        .select('*')
};

export const createAuto = (obj) => {
    return db('cars').insert(obj)
};

export const updateAuto = (id, obj) => {
    return db('cars').where('id', id).update(obj)
};

export const deleteAuto = (id) => {
    return db('cars').where('id', id).del()
};