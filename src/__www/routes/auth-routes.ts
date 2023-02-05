import { authenticationMiddleware } from '@web/middleware/authentication.middleware'
import { Router } from 'express'

const api = Router().use(authenticationMiddleware)

api.get('/', (_req, res) => {
  res.json({ message: 'ho' })
})

export default api
