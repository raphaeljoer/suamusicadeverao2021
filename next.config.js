module.exports = {
  env: {
    RECAPTCHA_V3_SITE_KEY: process.env.RECAPTCHA_V3_SITE_KEY,
  },
  images: {
    path: '/_next/image',
    loader: 'default',
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: [
      'images.suamusica.com.br',
    ],
  },
}
