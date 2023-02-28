import { buildSchema } from 'graphql';
import { getAllNewsCtr, getNewCtr, createNewCtr } from '../../controllers/graphql/news.controllers.js';

export const graphqlSchema = buildSchema(`
    input InputNew{
        title: String!
        body: String!
        author: String!
        image: String!
    }
    type New{
        id: String!
        title: String
        body: String
        author: String
        image: String
    }
    type Query{
        getNewCtr(id:String!):New
        getAllNewsCtr:[New]
    }
    type Mutation{
        createNewCtr(data: InputNew):New
    }
`)

export const graphqlRoot = {
    getAllNewsCtr,
    getNewCtr,
    createNewCtr
}