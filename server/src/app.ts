import { config } from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

// Setup environment
config()

const corsOptions = {
  origin: 'http://localhost:3000',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type',
  methods: 'GET, PUT, POST, DELETE, PATCH',
}

// Controllers (route handlers)
import { testApi } from './controllers/api'

const app = express()

// Express configuration
app.set('port', 8000)
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.get('/test', testApi)

export default app
