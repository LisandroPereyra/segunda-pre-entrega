import { json } from "express";
import ProductModel from "../../models/product.js";

class ProductManager {
  
  // constructor() {
  //   this.products = [];
  // }
  
  static async getProducts (limit, page, query, sort) {
    
    let getLimit = limit !== undefined ? limit : 10
    let getPage = page !== undefined ? page: 1
    let getQuery = query !== undefined ? {category: query} : {}
    let getSort = sort === '-'? sort : '+'


    const products = await ProductModel.paginate(getQuery, {limit:getLimit, page:getPage, sort: `${getSort}price`})
    
    console.log("funciona",products)
    res.status(201).json(products)
  }

  //   static async getProducts (req, res) {

  //   const products = await ProductModel.find()
  //   console.log("funciona",products)
  //   res.status(201).json(products)
  // }

  static async getProductById (req, res) {
    const {id} = req.params 
    let product = await ProductModel.findById(id)
    res.status(201).json(product)
  }

  static async addProduct (req, res) {
    const {body}= req
    const product = {...body}



    try { 
       const result = await ProductModel.create(product)
        console.log('Product added', result);
        res.status(201).json(result)

    } catch (error) {
        res.status(404)
    }
  }

  static async updateProduct (req, res) {
    
    const {id} = req.params
    const {body}= req
    const product = {...body}
    try {
         const result = await ProductModel.findByIdAndUpdate(id, product)
          console.log('updated', result );
          res.status(201).json(result)
        }
        
     catch(error) {
        res.status(404);
    }
  }
//http://localhost:8080/api/products/updateProduct/
  static async deleteProduct (req, res) {

    const {id} = req.params
    try {
        await ProductModel.findByIdAndDelete(id)
        res.status(201)
    } catch (error) {
        console.log(error);
        res.status(404);
    }
  }
}

export default ProductManager;