/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/:path((#access_token$).*)',
                destination: '/posts',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
