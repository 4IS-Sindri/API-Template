import { printRoutes } from '@4lch4/koa-router-printer'
import { logger } from '@4lch4/logger'
import Koa from 'koa'
import KBody from 'koa-body'
import Helmet from 'koa-helmet'
import { IAppConfig } from '../../interfaces/index.js'
import { getRoutes } from '../../routes/index.js'

export class Server {
  private config: IAppConfig
  private app: Koa

  constructor(config: IAppConfig) {
    this.app = new Koa()

    logger.info(`config...`)
    logger.info(config)

    this.config = config
  }

  start() {
    this.app.listen(this.config.port, () => {
      console.log(`${this.config.name}-v${this.config.version} has come online!`)
    })

    return this // For method chaining
  }

  addMiddleware() {
    this.app.use(KBody())
    this.app.use(Helmet())

    return this // For method chaining
  }

  addRoutes() {
    const routes = getRoutes()

    for (const route of routes) {
      this.app.use(route.routes())
      this.app.use(route.allowedMethods())
    }

    printRoutes(this.app, {
      displayHead: false,
      displayPrefix: true
    })

    return this // For method chaining
  }
}
