/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['localhost']
  },
  // env:{
  //   BASE_IMAGE_URL:BASE_IMAGE_URL,
  //   BASE_THUMB_URL:BASE_THUMB_URL
  // }
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
}

module.exports = nextConfig
