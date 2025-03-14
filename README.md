# TikTok All in One API

A comprehensive API for accessing TikTok-related data and functionalities, designed for deployment on RapidAPI.

## Features

- Access trending content from TikTok's For You Page
- Discover content through advanced search capabilities
- Retrieve detailed video information
- Search for videos, music, hashtags, and users
- Access user profile data and videos
- Retrieve music information and videos using specific tracks
- Explore hashtags and challenges

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- A TikTok API source (this project uses an example URL that must be replaced with actual TikTok data source)

## Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/tiktok-all-in-one-api.git
cd tiktok-all-in-one-api
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Update the `.env` file with your configuration.

4. Start the server
```bash
npm start
```

## Deployment to RapidAPI

1. Create an account on [RapidAPI](https://rapidapi.com/)
2. Create a new API project
3. Follow the deployment instructions provided by RapidAPI
4. Configure your API endpoints and pricing tiers

## Usage

All API endpoints require authentication using RapidAPI keys. Include these headers with every request:

```
'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY'
'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
```

## API Endpoints

See the [API Documentation](https://yourname.docs.rapidapi.com/tiktok-all-in-one) for complete details on all available endpoints.

### Example Request

```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://tiktok-all-in-one.p.rapidapi.com/feed/trending',
  params: {
    region: 'US',
    limit: '20'
  },
  headers: {
    'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
    'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

## Rate Limits

- Free tier: 100 requests per day
- Basic tier: 1,000 requests per day
- Pro tier: 10,000 requests per day
- Enterprise tier: Custom limits

## Legal Notice

This API is for educational and development purposes only. Users are responsible for ensuring their use complies with TikTok's Terms of Service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
