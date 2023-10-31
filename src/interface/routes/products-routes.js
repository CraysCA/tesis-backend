import { Router } from 'express'

import { productsController } from '../../controller/index.js'

const router = Router()

router.post('/', productsController.createProduct)

router.get('/', productsController.findProduct)

router.put('/:id', productsController.updateProduct)

router.delete('/:id', productsController.deleteProduct)

export default router
