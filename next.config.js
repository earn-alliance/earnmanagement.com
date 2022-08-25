const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
const withImages = require('next-images');
dotenvLoad();
withImages();
const withNextEnv = nextEnv();
const ImageGetLink = 'http://localhost:3000';
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

  async exportPathMap() {
    return {
      '/': { page: '/' },
      '/home': { page: '/home' },
    };
  },
});
