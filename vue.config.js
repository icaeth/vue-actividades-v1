module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/_shared.scss";'
      }
    },
    requireModuleExtension: true
  }
};
