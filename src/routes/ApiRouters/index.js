import { Router } from "express";

import ProductRouter from "./ProductsRouter.js"
import CartRouter from "./CartRouter.js"

const ApiRouter = Router()

ApiRouter.use('/products', ProductRouter)
ApiRouter.use('/carts', CartRouter)


export default ApiRouter