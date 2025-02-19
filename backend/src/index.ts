import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import express from 'express'
import { trpcRouter } from './trpc'
const expressApps = express()
expressApps.get('/ping', (req, res) => {
  res.send('pong')
})

expressApps.use(cors())

expressApps.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
)

expressApps.listen(3000, () => {
  console.info('Listening at http://localhost:3000')
})
