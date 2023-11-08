import {
  getAllProducts,
  getOneProductById,
} from "../services/products.services.js";

import { itemFormatter, listFormatter, noFound } from "../services/helpers.js";

export const getAllProductsController = async (req, res) => {
  let products = await getAllProducts();
  return res.status(200).json({
    message: "listado de productos",
    count: products.length,
    products: listFormatter(products),
  });
};

export const getOneProductByIdController = async (req, res) => {
  let { id } = req.params;
  let product = await getOneProductById(id);
  if (!product) return res.status(404).json(noFound())
  return res.status(200).json({
    message: `detalles de ${product.code}`,
    product: itemFormatter(product),
  });
};
