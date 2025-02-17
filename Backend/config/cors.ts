import { CorsConfig } from '@ioc:Adonis/Core/Cors'

const corsConfig: CorsConfig = {
  enabled: true,
  origin: true, // Allows all origins (for development)
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  headers: true,
  exposeHeaders: [],
  credentials: false,
  maxAge: 0
}

export default corsConfig
