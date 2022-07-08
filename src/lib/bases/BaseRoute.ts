import { Logger, logger } from '@4lch4/logger'
import Router from '@koa/router'

/**
 * The base route class to be extended by all other routes.
 *
 * @class BaseRoute
 */
export class BaseRoute {
  logger: Logger = logger
  router: Router

  constructor() {
    this.router = new Router({ prefix: process.env.API_PREFIX })
  }

  build(): Router {
    return this.router
  }
}
