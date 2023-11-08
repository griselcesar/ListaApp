import { connect } from "mongoose";
import { config } from "dotenv";
import app from "./server/index.js";

config();

connect(process.env.URI_DB)
  .then(() => {
    console.log("🚀base de datos conectada");
    app.listen(process.env.PORT, () => {
      console.log("🧏API escuchando en el puerto:" + process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
