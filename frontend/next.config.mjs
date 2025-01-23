/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    // Change below URL with your current domain
    API_PROD_URL: "http://localhost:3000/api",
    storageURL: "http://localhost:3000",
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  module: {
    rules: [
      { test: /\.(ts|tsx|jsx)$/, loader: "ts-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(gif|svg|jpg|png|mp3)$/,
        use: ["file-loader"],
      },
    ],
  },
  // other boilerplate config goes down here
};

export default nextConfig;
