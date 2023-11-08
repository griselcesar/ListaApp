export const listFormatter = (list) => {
  return list.map((item) => ({
    id: item._id,
    code: item.code,
    brand: item.brand,
    model: item.model,
    description: item.description,
    category: item.category,
    sell: item.sell,
  }));
};

export const itemFormatter = (item) => {
  return {
    id: item._id,
    code: item.code,
    brand: item.brand,
    model: item.model,
    description: item.description,
    category: item.category,
    sell: item.sell,
  };
};

export const noFound = () => {
  return res.status(404).json({ message: "producto no encontrado" });
};