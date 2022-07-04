import express from 'express'

import { configServer as config } from './config/environment'

import productsRoutes from './routes/products.router'
import authRoutes from './routes/auth.router'

const app = express()

app.set('version', config.versionApi)

app.set('views', `${ __dirname }/views/partials/`)
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(`/api/${ config.versionApi }/productos`, productsRoutes)
app.use(`/auth`, authRoutes)


export default app