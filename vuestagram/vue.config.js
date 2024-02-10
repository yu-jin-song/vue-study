const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/vuestagram',
  transpileDependencies: true,
  pwa: {
    name: 'vuestagram',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html']
    }
  }
})
