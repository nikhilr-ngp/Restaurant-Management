import { AuthConfig } from '@ioc:Adonis/Addons/Auth'

const authConfig: AuthConfig = {
  guard: 'api',
  guards: {
    api: {
      driver: 'oat', // OAuth2-based API tokens
      tokenProvider: {
        type: 'database',
        table: 'api_tokens',
      },
      provider: {
        driver: 'lucid',
        model: () => import('App/Models/User'),
      },
    },
  },
}

export default authConfig
