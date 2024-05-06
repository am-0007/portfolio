module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.extensions = ['.mjs', '.js', '.json', '.jsx'];
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      });
    }

    return config;
  },
}
