// Configuration file for TikTok All in One API
require('dotenv').config();

module.exports = {
  // Server configuration
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // TikTok API configuration
  tiktokApi: {
    baseUrl: process.env.TIKTOK_API_BASE_URL || 'https://internal-tiktok-api.example.com',
    apiKey: process.env.TIKTOK_API_KEY,
    apiSecret: process.env.TIKTOK_API_SECRET,
    timeout: parseInt(process.env.API_TIMEOUT) || 10000
  },
  
  // Rate limiting configuration (requests per day)
  rateLimits: {
    free: parseInt(process.env.RATE_LIMIT_FREE) || 100,
    basic: parseInt(process.env.RATE_LIMIT_BASIC) || 1000,
    pro: parseInt(process.env.RATE_LIMIT_PRO) || 10000
  },
  
  // API tiers and pricing
  tiers: {
    free: {
      name: 'Free',
      rateLimit: parseInt(process.env.RATE_LIMIT_FREE) || 100,
      price: 0
    },
    basic: {
      name: 'Basic',
      rateLimit: parseInt(process.env.RATE_LIMIT_BASIC) || 1000,
      price: 9.99
    },
    pro: {
      name: 'Pro',
      rateLimit: parseInt(process.env.RATE_LIMIT_PRO) || 10000,
      price: 49.99
    },
    enterprise: {
      name: 'Enterprise',
      rateLimit: 'Custom',
      price: 'Contact for pricing'
    }
  }
};
