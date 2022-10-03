export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432
    },
    binance: {
      api_key: process.env.BINANCE_API_KEY,
      secret_key: process.env.BINANCE_SECRET_KEY
  }
  });