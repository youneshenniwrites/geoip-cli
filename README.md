# GeoIP CLI Tool (Node.js Version)

A command-line interface tool that queries the IPStack API to obtain the latitude and longitude coordinates for a given IP address.

## Features

- TypeScript for better type safety and developer experience
- Simple command-line interface
- IP address validation
- Secure API key handling
- Error handling with meaningful messages
- Pipeline-friendly output format
- Docker support
- Comprehensive test suite

## Installation

### Local Installation

1. Go to [IPStack](https://ipstack.com/) and create an account to generate your API key.

   - Create a `.env` file in the root of the project and add your API key:

   - `echo "IPSTACK_API_KEY=your_api_key_here" > .env`

3. Clone the repository:

   - `git clone https://github.com/yourusername/geoip-cli.git`
   
   - `cd geoip-cli`

4. Install dependencies:

   - `npm install`

6. Build the project:

   - `npm run build`
  
7. Run the app:

   - `npm start`

## Docker Installation

1. Build the Docker image:

   `docker build -t geoip-cli .`

### Docker Usage

- `docker run --env IPSTACK_API_KEY=your_api_key_here geoip-cli 8.8.8.8`

### Output Format

The tool outputs latitude and longitude as comma-separated values:

`37.7749,-122.4194`

## Security Considerations

1. API key stored in environment variables
2. Input validation to prevent injection attacks
3. HTTPS for API communication
4. Error messages don't expose sensitive information
5. Dependencies regularly updated via npm audit

## Testing

Run the test suite:
npm test

## Troubleshooting

1. "IPSTACK_API_KEY not set":

   - Check your .env file
   - For Docker, ensure you're passing the API key

2. "Invalid IP address format":

   - Verify IPv4 format (e.g., 192.168.1.1)

3. "Network Error":
   - Check internet connection
   - Verify api.ipstack.com accessibility

## Limitations

- IPv4 addresses only
- Requires Node.js 18+
- Free IPStack API has rate limits

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

MIT License
