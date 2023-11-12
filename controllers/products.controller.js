import {
  getAllProducts,
  getOneProductById,
  createOneProduct,
  deleteOneProductById,
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
  if (!product) return res.status(404).json(noFound());
  return res.status(200).json({
    message: `detalles de ${product.code}`,
    product: itemFormatter(product),
  });
};

export const createOneProductController = async (req, res) => {
  let { newProduct } = req;
  let product = await createOneProduct(newProduct);
  if (!product) return res.status(404).json(noFound());
  return res.status(201).json({
    message: "producto creado correctamente",
    product: itemFormatter(product),
  });
};

export const deleteOneProductByIdController = async (req, res) => {
  let { id } = req.params;
  let product = await deleteOneProductById(id);
  if (!product) return res.status(404).json(noFound());
  return res.status(200).json({
    message: "producto eliminado correctamente",
  });
};
