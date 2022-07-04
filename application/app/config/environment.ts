import 'dotenv/config'

export const configServer = {
    port: Number(process.env.PORT) ,
    urlMongo: process.env.URL_MONGO_CONECTION as string,
    versionApi: process.env.VERSION_API as string,
}