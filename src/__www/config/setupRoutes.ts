import { Express } from 'express'
import authRoutes from '../routes/authRoutes'
import publicRoutes from '../routes/publicRoutes'

export default function applyRoutes(app: Express): void {
  app.use('/', publicRoutes)
  app.use('/auth', authRoutes)
}
