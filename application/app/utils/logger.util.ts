import winston from 'winston'

export const logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.Console({ level: 'silly' })
    ]
})