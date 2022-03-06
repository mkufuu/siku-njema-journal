/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async redirects() {
        return [
            {
                source: '/#',
                has: [
                    {
                        type: 'query',
                        key: 'access_token',
                    },
                ],
                destination: '/posts',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
