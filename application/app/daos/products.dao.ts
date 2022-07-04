import { ProductModel } from '../models/product.model'

class ProductsDAO{
    constructor(){}


    async all(){
        try {

            const listProducts = await ProductModel.find({})
            return listProducts

        } catch (error) {
            throw new Error(error.message)
        }
    }

}

export default new ProductsDAO()