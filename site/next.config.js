/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Robrotto Registry',
    description: 'Test run of registry setup.',
    icon: 'https://avatarfiles.alphacoders.com/280/280560.png',
    listUrl: 'https://masonbrott.github.io/registry-test/',
    contactUrl: 'https://github.com/masonbrott/registry-test/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/registry-test/1.1',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
