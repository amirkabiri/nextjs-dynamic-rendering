console.log('-------- Rendering mode: ', process.env.NEXT_PUBLIC_SSR ? 'SSR' : "CSR", ' --------')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

if(!process.env.NEXT_PUBLIC_SSR){
  nextConfig.output = 'export'
}

module.exports = nextConfig
