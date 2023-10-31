import { BasicStrategy as basicStrategy } from 'passport-http'
import bcrypt from 'bcryptjs'
import { unauthorized } from '@hapi/boom'

import { GetUserByEmail } from '../../../uses-cases/users/index.js'

const BasicStrategy = new basicStrategy(async (email, password, done) => {
	const user = await GetUserByEmail({ email })

	if (!user) return done(unauthorized(), false)
	const isMatch = await bcrypt.compare(password, user.password)
	if (!isMatch) return done(unauthorized(), false)
	return done(null, user)
})

export default BasicStrategy
