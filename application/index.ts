import app from './app/app'
import mongoose from 'mongoose'
import { configServer as config } from './app/config/environment'
import { logger } from './app/utils/logger.util'


const initApp = () => {
    mongoose.connect(config.urlMongo).catch(error => logger.log('error', error.toString()));
    app.listen(config.port, () => logger.log('info', `Servicio corriendo en http://localhost:${ config.port.toString() }/api/${ app.get('version') }/`))
}

initApp()