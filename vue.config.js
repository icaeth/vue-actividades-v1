module.exports = {

    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-project/'
        : '/',

    css: {
        loaderOptions: {

            scss: {
                prependData: `@import "@/assets/_shared.scss";`,
            },
        }
    }
};