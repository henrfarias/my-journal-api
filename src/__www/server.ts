import 'reflect-metadata'
import express from 'express'
import { config } from 'dotenv'
import setupApp from './config/setupApp'
import setupRoutes from './config/setupRoutes'
config()

const app = express()
const PORT = process.env.PORT || 3000

setupApp(app)
setupRoutes(app)

app.listen(PORT, () => {
  console.log(`Back-end started in ${PORT} port!`)
})
