import { Router } from 'express'

import productsController from '../controllers/products.controller'

const router:Router = Router()

router.get('/', productsController.all)

export default router