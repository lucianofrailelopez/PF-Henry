import { literal, DataTypes, INTEGER } from "sequelize";
import { sequelieze } from "../database/database.js";
import { Product } from "./product.js";
import {Purchase} from "./purchase.js"
import {Troley} from "./troley.js"

export const User = sequelieze.define( "user", {
    id:{type:DataTypes.INTEGER, primaryKey: true, defaultValue: literal("nextval('custom_sequence')")},   //ID.\*
    image: {type:DataTypes.STRING}, // Imagen.\*
    name: {type:DataTypes.STRING}, // Nombre.\*
    contact:  {type:DataTypes.STRING},     
},{ timestamps: false },
)

sequelieze.beforeSync(() => {
   sequelieze.query('CREATE SEQUENCE IF NOT EXISTS custom_sequence CACHE 50');
  
   });
   await sequelieze.sync();   // This is to create a sequence that can be used automaticly
    

   Dogs.belongsToMany(Temperaments, {through: 'DogsTemperaments'});
   Temperaments.belongsToMany(Dogs, {through: 'DogsTemperaments'});

sequelieze.sync
export default User