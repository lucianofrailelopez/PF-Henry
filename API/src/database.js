import  Sequelize  from "sequelize";

// import dotenv from 'dotenv';
// dotenv.config()


// const {DB_HOST, DB_PASSWORD, DB_USER} = process.env

export const sequelieze = new Sequelize ('ecomercedb', "postgres", "123456", {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

