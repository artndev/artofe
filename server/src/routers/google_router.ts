import express from 'express'
import passport from 'passport'
import config from '../config.json' with { type: 'json' }

const router = express.Router()

router.get('/login', (req, res, next) => {
  return passport.authenticate('google', {
    scope: ['profile', 'email'],
    state: req.query.id as string | undefined,
  })(req, res, next)
})

router.get('/callback', (req, res, next) => {
  return passport.authenticate(
    'google',
    {
      failureRedirect: `${config.CLIENT_URL}/fallback`,
    },
    (err, user, _info) => {
      if (err) return res.redirect(`${config.CLIENT_URL}/register`)
      if (!user) return res.redirect(`${config.CLIENT_URL}/fallback`)

      req.logIn(user, err2 => {
        if (err2) return res.redirect(`${config.CLIENT_URL}/fallback`)

        return res.redirect(`${config.CLIENT_URL}`)
      })
    }
  )(req, res, next)
})

export default router
