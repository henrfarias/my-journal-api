import { Express } from 'express'
import authRoutes from '../routes/auth-routes'
import publicRoutes from '../routes/public-routes'

export default function applyRoutes(app: Express): void {
  app.use('/', publicRoutes)
  app.use('/auth', authRoutes)
}
