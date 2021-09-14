const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['cloudinary.com','certificates.soyhenry.com','res.cloudinary.com','www.efset.org','c.tenor.com','res.cloudinary.com'],
  },
}
