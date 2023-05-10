import { Router } from "express";
import ProductsManager from "../../dao/classes/MongoDB/ProductManager.js"

const ProductsRouter = Router()

ProductsRouter
.get("/getProducts", ProductsManager.getProducts)
.get("/getProductById/:id", ProductsManager.getProductById)
.post("/addProduct", ProductsManager.addProduct)
.put("/updateProduct/:id", ProductsManager.updateProduct)
.delete("/deleteProduct/:id", ProductsManager.deleteProduct)

export default ProductsRouter;

//http://localhost:8080/api/products/updateProduct/:id