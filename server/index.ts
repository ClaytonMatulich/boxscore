import { createHTTPServer } from "@trpc/server/adapters/standalone"
import cors from 'cors'

import { router } from './trpc'


import { movieRouter } from './routers/movie.ts'

const appRouter = router({
  movie: movieRouter,
})

export type AppRouter = typeof appRouter

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
})

server.listen(3000);