import { Router } from 'express'
import passport from 'passport'
import { authController } from '../../controller/index.js'

const router = Router()

router.post(
	'/login',
	passport.authenticate('basic', { session: false }),
	authController.login,
)

export default router
