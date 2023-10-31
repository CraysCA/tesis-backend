import { Router } from 'express'
import { authorization, headerUserValidation } from '../middlewares/index.js'

const router = Router()

import users from './users-routes.js'
import auth from './auth-routes.js'
import files from './files-routes.js'

router.use('/users', authorization, headerUserValidation, users)
router.use('/auth', auth)
router.use('/files', files)

export default router
