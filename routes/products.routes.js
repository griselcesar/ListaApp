import { Router } from "express";
import {
  getAllProductsController,
  getOneProductByIdController,
  createOneProductController,
} from "../controllers/products.controller.js";

import { createProductDTO } from "../validators/products.validator.js";

const productsRoutes = Router();

productsRoutes
  .route("/")
  .get(getAllProductsController)
  .post(createProductDTO, createOneProductController);
productsRoutes.route("/:id").get(getOneProductByIdController);

export default productsRoutes;
