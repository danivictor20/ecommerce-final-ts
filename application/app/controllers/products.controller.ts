import { Request, Response } from 'express'
import { ProductsService } from '../services/products.service'

class ProductsController{

    static productService = new ProductsService();

    
    async all(req:Request, res:Response){
        try {

            const listProducts= await ProductsController.productService.all()
            res.status(200).json({data: listProducts})

        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

}

export default new ProductsController()