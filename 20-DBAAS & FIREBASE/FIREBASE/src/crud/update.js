import { UserDB } from "../database/db.js";
import { readSpecificUser } from "./leer.js";

export const updateUser = async (id,data) => {
    const miDoc = UserDB.doc(id);

    console.log(miDoc);

    //Chequear si existe sino no seguir.
    await UserDB.doc(id).update(data);
    console.log('salio bien');
    return readSpecificUser(id);
}

const dataNueva = {
    "firstname": "Jose",
    "lastname": "Gomez",
}

updateUser('nGW80TyTMV8YiGuKAT5L', dataNueva)