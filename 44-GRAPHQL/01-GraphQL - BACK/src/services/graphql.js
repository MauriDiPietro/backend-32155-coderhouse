import { buildSchema } from 'graphql';
import { 
    getAllUsers,
    getUser,
    addUser,
    editUser,
    deleteUser
 } from '../controllers/users.controller.js';

 export const graphqlSchema = buildSchema(`
    type User{
        id: String!
        name: String
        age: Int
        email: String
        avatar: String
    }
    type Query{
        getAllUsers:[User]
        getUser(id:String!):User
    }
    input UserInput{
        name: String!
        age: Int!
        email: String!
        avatar: String!
    }
    input UserEditInput{
        name: String!
        age: Int!
        email: String!
        avatar: String!
    }
    type Mutation{
        addUser(data:UserInput):User
        editUser(id:String!, data:UserEditInput):User
        deleteUser(id:String!):Boolean
    }
 `)

 export const graphqlRoot = {
    getAllUsers,
    getUser,
    addUser,
    editUser,
    deleteUser
 }