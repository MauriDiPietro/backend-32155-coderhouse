import { ProductsModel } from '../models/products.js';
import { CategoryModel } from '../models/categories.js';

export const checkBodyProduct = async (req, res, next) => {
  const { name, description, stock, price, categoryId } = req.body;

  if (!name || !description || !stock || !price || !categoryId)
    return res.status(400).json({
      msg: 'missing Body fields',
    });

  const category = await CategoryModel.findById(categoryId);

  if (!category)
    return res.status(400).json({
      msg: 'Category does not exists',
    });

  next();
};

export const getAllProducts = async (req, res) => {
  try {
    //localhost:8080/api/products?categoryId=kbfisdfh78y83fdf
    const { categoryId } = req.query;

    const query = {};

    if (categoryId) {
      query.categoryId = categoryId;
    }
    const products = await ProductsModel.find(query);
    res.json({
      data: products
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await ProductsModel.findById(id);
    if(!product)
      return res.status(404).json({
        msg: 'Product not found!'
      });

      res.json({
        data: product,
      })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, stock, price, categoryId } = req.body;

    const newProduct = await ProductsModel.create({
      name, 
      description,
      stock,
      price,
      categoryId
    });

    res.status(201).json({
      data: newProduct,
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, stock, price, categoryId } = req.body;

    const product = await ProductsModel.findById(id);
    if(!product)
      return res.status(404).json({
        msg: 'Product not found',
      });
    const productUpdated = await ProductsModel.findByIdAndUpdate(
      id,
      { name, description, stock, price, categoryId },
      { new: true }
    );
    res.json({
      msg: 'Product updated',
      data: productUpdated
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await ProductsModel.findByIdAndDelete(id);
    res.json({
      msg: 'product deleted!'
    })
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};
