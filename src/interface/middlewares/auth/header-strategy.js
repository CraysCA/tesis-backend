import { Strategy, ExtractJwt } from 'passport-jwt'
import { config } from '../../../config/config.js'
const { secret } = config.jwt

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret,
}

const JwtStrategy = new Strategy(options, (payload, done) => {
	return done(null, payload)
})

export default JwtStrategy
