import { Router } from 'express'

import { invoicesController } from '../../controller/index.js'

const router = Router()

router.post('/', invoicesController.createInvoice)

router.get('/', invoicesController.findInvoice)

router.put('/:orderId', invoicesController.updateInvoice)

router.delete('/:id', invoicesController.deleteInvoice)

export default router
