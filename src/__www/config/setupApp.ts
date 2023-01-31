import { Express, json } from 'express'
import cors from 'cors'

export default function setupApp(app: Express): void {
  app.use(json())
  app.use(cors())
}