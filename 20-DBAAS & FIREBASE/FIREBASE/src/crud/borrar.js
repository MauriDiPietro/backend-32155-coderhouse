import { UserDB } from "../database/db.js";

const deleteUser = async(id) => {
    await UserDB.doc(id).delete()
    console.log('done');
}

deleteUser('nGW80TyTMV8YiGuKAT5L')