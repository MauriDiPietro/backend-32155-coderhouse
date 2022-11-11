import { listAutos, createAuto, updateAuto, deleteAuto } from "../services/services.cars.js";

export const list = async (req, res) => {
    try {
        const getAll = await listAutos();
        res.json(getAll);
    } catch (error) {
        res.status(400).json(error.message)
    }
};

export const single = async(req, res) => {
    try {
        const car = await listAutos({id: req.params.id});
        res.json(car);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const created = async(req, res) => {
    try {
        await createAuto(req.body)
        res.status(200).send('Vehiculo guardado con éxito!');
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const updated = async(req, res) => {
    try {
        const { body } = req;
        const { id } = req.params;
        await updateAuto(id, body);
        res.json(body);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

export const deleted = async(req, res) => {
    try {
        const { id } = req.params;
        await deleteAuto(id);
        res.send(`Vehiculo eliminado!`);
    } catch (error) {
        res.status(400).json(error.message)
    }
}