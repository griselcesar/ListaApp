import { Router } from "express";
import {
  getAllProductsController,
  getOneProductByIdController,
} from "../controllers/products.controller.js";

const productsRoutes = Router();

productsRoutes.route("/").get(getAllProductsController);
productsRoutes.route("/:id").get(getOneProductByIdController);

export default productsRoutes;
