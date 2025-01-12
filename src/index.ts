#!/usr/bin/env node

import axios from 'axios';
import { config } from './config';

interface IPStackResponse {
    latitude: number;
    longitude: number;
    error?: {
        code: number;
        type: string;
        info: string;
    };
}

function validateIP(ipAddress: string): boolean {
    const parts = ipAddress.split('.');
    if (parts.length !== 4) return false;
    
    return parts.every(part => {
        const num = parseInt(part, 10);
        return num >= 0 && num <= 255;
    });
}

async function getLocation(ipAddress: string): Promise<{ latitude: number; longitude: number }> {
    if (!config.IPSTACK_API_KEY) {
        console.error('Error: IPSTACK_API_KEY not set in environment');
        process.exit(1);
    }

    if (!validateIP(ipAddress)) {
        console.error(`Error: Invalid IP address format: ${ipAddress}`);
        process.exit(1);
    }

    try {
        const url = `${config.IPSTACK_BASE_URL}/${ipAddress}`;
        const response = await axios.get<IPStackResponse>(url, {
            params: {
                access_key: config.IPSTACK_API_KEY
            }
        });

        const data = response.data;

        if (data.error) {
            console.error(`API Error: ${data.error.info}`);
            process.exit(1);
        }

        return {
            latitude: data.latitude,
            longitude: data.longitude
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`Network Error: ${error.message}`);
        } else {
            console.error('An unexpected error occurred');
        }
        process.exit(1);
    }
}

async function main() {
    const ipAddress = process.argv[2];
    
    if (!ipAddress) {
        console.error('Usage: geoip <ip_address>');
        process.exit(1);
    }

    try {
        const location = await getLocation(ipAddress);
        console.log(`${location.latitude},${location.longitude}`);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

if (require.main === module) {
    main();
}

export { validateIP, getLocation };