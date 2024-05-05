const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.am7.com',
                port: '',
                pathname: '/account123/**'
            }
        ]
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
