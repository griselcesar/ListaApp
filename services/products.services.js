import productsModel from "../models/products.model.js";

export const getAllProducts = async () => {
  let products = await productsModel.find();
  return products;
};

export const getProductsByCategory = async (category) => {
  let products = await productsModel.find({ category });
  return products;
};

export const getOneProductByCode = async (code) => {
  let product = productsModel.findOne({ code });
  return product;
};

export const getOneProductById = async (id) => {
  let product = await productsModel.findById(id);
  return product;
};

export const createOneProduct = async (productData) => {
  let product = await productsModel.create(productData);
  return product;
};

export const updateOneProductById = async (id, newDataProduct) => {
  let product = await productsModel.findByIdAndUpdate(id, newDataProduct, {
    new: true,
  });
  return product;
};

export const deleteOneProductById = async (id) => {
  let product = productsModel.findByIdAndDelete(id);
  return product;
};
