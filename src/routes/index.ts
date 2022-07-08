import Router from '@koa/router'
import { HealthRoute } from './HealthRoute.js'

const Endpoints = [HealthRoute]

export function getRoutes(): Router[] {
  const routes: Router[] = []

  for (const Endpoint of Endpoints) routes.push(new Endpoint().build())

  return routes
}
