/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        db_uri: process.env.DB_URI,
        cloud_name: process.env.CLOUD_NAME,
        preset_name: process.env.PRESET_NAME,
    }
}

module.exports = nextConfig
