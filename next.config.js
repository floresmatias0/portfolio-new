const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['certificates.soyhenry.com','res.cloudinary.com','www.efset.org','c.tenor.com','res.cloudinary.com'],
  },
}
