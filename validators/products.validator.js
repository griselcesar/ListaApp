import { getOneProductByCode } from "../services/products.services.js";
export const createProductDTO = async (req, res, next) => {
  let { code, brand, model, description, category } = req.body;
  if (!code) return res.status(400).json({ message: "code no asignado" });
  if (!brand) return res.status(400).json({ message: "brand no asignado" });
  if (!model) return res.status(400).json({ message: "model no asignado" });
  if (!description)
    return res.status(400).json({ message: "description no asignado" });
  if (!category)
    return res.status(400).json({ message: "category no asignado" });

  if (code) {
    let product = await getOneProductByCode(code);
    if (product) return res.status(400).json({ message: "code ya registrado" });
  }
  req.newProduct = { code, brand, model, description, category };
  next()
};
