import { router } from "../trpc.ts";
import { loggedProcedure } from "../trpcMiddleware.ts";
import { z } from "zod";

const mockMovies: Record<string, { id: string; name: string }> = {
  "movie1": {
    id: "movie1",
    name: "movie1Name"
  }
}

export const movieRouter = router({
  test: loggedProcedure
    .query(async () => {
      return "test"
    }),
  movieById: loggedProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts
      return mockMovies[input]
    }),
})