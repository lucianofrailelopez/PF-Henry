import { literal, DataTypes, INTEGER } from "sequelize";
import { sequelieze } from "../database/database.js";
import { User } from "./user.js";

export const Products = sequelieze.define( "products", {
    id:{type:DataTypes.INTEGER, primaryKey: true, defaultValue: literal("nextval('custom_sequence')")},   //ID.\*
    image: {type:DataTypes.STRING}, // Imagen.\*
    name: {type:DataTypes.STRING}, // Nombre.\*
    reference:  {type:DataTypes.STRING},
    stock: {type:DataTypes.STRING}, 
    quantity: {type:DataTypes.STRING}, 
    cathegory: {type:DataTypes.STRING}, 
    color: {type:DataTypes.STRING}, // Longevidad.\*    
},{ timestamps: false },
)

sequelieze.beforeSync(() => {
   sequelieze.query('CREATE SEQUENCE IF NOT EXISTS custom_sequence CACHE 50');
  
   });
   await sequelieze.sync();   // This is to create a sequence that can be used automaticly
    

   Products.hasMany(Temperaments, {through: 'UserProducts'});
   Temperaments.belongsToMany(Dogs, {through: 'UserProducts'});

sequelieze.sync
export default Products