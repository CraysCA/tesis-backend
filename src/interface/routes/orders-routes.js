import { Router } from 'express'

import { orderController } from '../../controller/index.js'

const router = Router()

router.post('/', orderController.createOrder)

router.get('/', orderController.findOrder)

router.put('/:id', orderController.updateOrder)

router.delete('/:id', orderController.deleteOrder)

export default router
