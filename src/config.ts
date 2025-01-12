import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export const config = {
    IPSTACK_API_KEY: process.env.IPSTACK_API_KEY,
    IPSTACK_BASE_URL: 'http://api.ipstack.com'
};