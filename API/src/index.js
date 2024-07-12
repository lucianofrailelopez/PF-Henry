import app from "./app.js";
import { sequelieze } from "./database.js";

app.listen(3000)

async function main () {
    try {
        await sequelieze.sync({force:false});
        console.log('Connection has been established successfully.');
        app.listen(3001)
        console.log("Server is listening on port", 3001)
      } catch (error) {
        console.error("Unable to connect to the database:", error);
      }
}
main ()