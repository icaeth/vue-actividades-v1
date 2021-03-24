module.exports = {
  publicPath: '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/_shared.scss";'
      }
    },
    requireModuleExtension: true
  }
};
