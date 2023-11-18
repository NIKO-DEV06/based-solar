/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_SERVICE_ID: process.env.NEXT_SERVICE_ID,
    NEXT_TEMPLATE_ID: process.env.NEXT_TEMPLATE_ID,
    NEXT_KEY_ID: process.env.NEXT_KEY_ID,
  },
};

module.exports = nextConfig;
