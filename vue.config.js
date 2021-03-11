module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/_shared.scss";'
      }
    },
    requireModuleExtension: true
  }
};
