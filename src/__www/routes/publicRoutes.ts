import { Router } from 'express'

const api = Router()

api.get('/', (_req, res) => {
  res.json({ message: 'hey' })
})

export default api
