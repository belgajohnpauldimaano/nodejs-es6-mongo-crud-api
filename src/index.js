import express from 'express'

import start from './server/start'
import routes from './routes'
import middlewares from './server/middelayers'
import database from './server/database'

const server = express()

database()
middlewares(server)
routes(server)
start(server)