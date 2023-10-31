import { Router } from 'express'
import { validationHandler as validate } from '../middlewares/index.js'
import { userSchema } from '../middlewares/schemas/index.js'
import { usersController } from '../../controller/index.js'

const router = Router()

router.post('/', validate(userSchema.create), usersController.createUser)

router.get('/', validate(userSchema.getParams), usersController.findUser)

router.put('/:id', validate(userSchema.update), usersController.updateUser)

router.delete('/:id', validate(userSchema.destroy), usersController.deleteUser)

export default router
