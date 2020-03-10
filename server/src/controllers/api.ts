import { Response, Request } from 'express'

/**
 * GET /test
 * smoke tests
 */
export const testApi = (req: Request, res: Response) => {
  res.json({ hello: 'hello' })
}
