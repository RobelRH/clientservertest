import { Sequelize } from "sequelize";

import dotenv from 'dotenv'

dotenv.config({ path: './config/.env' })

const db = new Sequelize(
    process.env.MYSQL_DB, 
    process.env.MYSQL_USER, 
    process.env.MYSQL_PASS, 
    {
        host: process.env.MYSQL_HOST,
        dialect: "mysql"
    }
);

export default db;