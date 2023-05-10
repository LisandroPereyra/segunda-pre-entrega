import { Router } from "express";
import CartManager from "../../dao/classes/MongoDB/CartManager.js"

const CartRouter = Router()

CartRouter
.post("/createCart", CartManager.createCart)
.get("/getCart/:id", CartManager.getCart)
.post("/addProduct/:cid/:pid", CartManager.addProduct)
.put("/addProductQuantity/:cid/:pid", CartManager.addProductQuantity)
//.post("/addProducts/:cid", CartManager.addProducts)
.delete("/deleteProduct/:cid/:pid", CartManager.deleteProduct)
.delete("/deleteCart/:cid", CartManager.deleteCart)

export default CartRouter;
//http://localhost:8080/api/carts/addProduct/644feb8dd3e6c3674120a628/643da7fe8bfdc8e12f5e5fa9