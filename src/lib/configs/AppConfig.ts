import { logger } from '@4lch4/logger'
import { IAppConfig } from '../../interfaces/index.js'

const ConfigDefaults: IAppConfig = {
  apiPrefix: '/api/v1',
  name: 'Koa API Template',
  port: 8080,
  version: '1.0.0'
}

export function getAppConfig(): IAppConfig {
  logger.info('AppConfig#getAppConfig...')

  logger.info(`process.env.API_PREFIX = ${process.env.API_PREFIX}`)
  logger.info(`process.env.APP_NAME = ${process.env.APP_NAME}`)
  logger.info(`process.env.APP_VERSION = ${process.env.APP_VERSION}`)
  logger.info(`process.env.APP_PORT = ${process.env.APP_PORT}`)

  return {
    apiPrefix: process.env.API_PREFIX || ConfigDefaults.apiPrefix,
    name: process.env.APP_NAME || ConfigDefaults.name,
    version: process.env.APP_VERSION || ConfigDefaults.version,
    port: parseInt(process.env.APP_PORT || ConfigDefaults.port.toString())
  }
}
