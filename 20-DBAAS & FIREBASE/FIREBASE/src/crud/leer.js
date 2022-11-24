import { UserDB } from "../database/db.js";

const readAllUsers = async () => {
    let resultado = await UserDB.get();
    // console.log(resultado)
    let docs = resultado.docs;
    
    const output = docs.map(aDoc => ({
        id: aDoc.id,
        data: aDoc.data()
    }))

    return output;
}

export const readSpecificUser = async(id) => {
    let result = await UserDB.doc(id).get();
    
    return ({
        id: result.id,
        data: result.data(),
    });
}

readAllUsers().then((data) => console.log(data));
readSpecificUser('nGW80TyTMV8YiGuKAT5L').then((data) => console.log(data));