/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Robrotto',
    description: 'Test run of image registry.',
    icon: 'https://avatarfiles.alphacoders.com/280/thumb-1920-280560.png',
    listUrl: 'https://github.com/MasonBrott/registry-test/',
    contactUrl: 'https://github.com/MasonBrott/registry-test/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/registry-test/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
