const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const withImages = require('next-images');
dotenvLoad();
withImages();
const withNextEnv = nextEnv();
const ImageGetLink =
  process.env.NEXT_PUBLIC_IMAGE_PATH || 'https://www.earnalliance.com/';
module.exports = withNextEnv({
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['localhost', 'storage.googleapis.com'],
    loader: 'imgix',
    path: ImageGetLink,
    trailingSlash: true,
  },
  presets: ['next/babel'],
  distDir: 'build',
  async exportPathMap() {
    return {
      '/': { page: '/' },
      '/home': { page: '/home' },
    };
  },
});
