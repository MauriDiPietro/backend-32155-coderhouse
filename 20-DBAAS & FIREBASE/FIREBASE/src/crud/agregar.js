import { UserDB } from "../database/db.js";

const addUser = async (data) => {
    try{
        const UserDocument = UserDB.doc();
        await UserDocument.create(data)     
        console.log("salio todo bien!")        
    }
    catch(err){
        console.log("ERROR");
        console.log(err);
    }
}

const data = {
    "firstname": "CArlos",
    "lastname": "Gomez",
    "address": "Av. Siempreviva 1200",
    "birthday": "05/13/1990",
    "age": "30"
};

addUser(data)

