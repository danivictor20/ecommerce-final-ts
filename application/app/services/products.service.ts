import productsDAO from '../daos/products.dao'

export class ProductsService{

    constructor(){}


    async all(){
        try {

            const listProducts = await productsDAO.all()
            return listProducts

        } catch (error) {
            throw new Error(error.message)
        }
    }


}