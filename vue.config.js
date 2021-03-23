module.exports = {
  publicPath: '/vue-actividades-v1/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/_shared.scss";'
      }
    },
    requireModuleExtension: true
  }
};
