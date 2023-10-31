import passport from 'passport'
import BasicStrategy from './basic-strategy.js'
import JwtStrategy from './header-strategy.js'

passport.use(BasicStrategy)
passport.use(JwtStrategy)
