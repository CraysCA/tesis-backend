import { Router } from 'express'
import { authorization, headerUserValidation } from '../middlewares/index.js'

const router = Router()

import users from './users-routes.js'
import auth from './auth-routes.js'
import files from './files-routes.js'
import products from './products-routes.js'
import invoices from './invoices-routes.js'

router.use('/users', authorization, users)
router.use('/auth', auth)
router.use('/files', files)
router.use('/products', products)
router.use('/invoices', invoices)

export default router
