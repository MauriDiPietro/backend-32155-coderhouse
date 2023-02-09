import db from "../db/db.js";
import dotenv from 'dotenv';
import { DataTypes } from "sequelize";
dotenv.config();

const PostModel = db.define(process.env.DB_TABLE, {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    }
});

export default PostModel;