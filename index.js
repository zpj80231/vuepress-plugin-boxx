const { resolve } = require('path')

module.exports = (options, context) => ({
  define () {
    const { type, title, content, blockStyle, titleStyle, contentStyle, changeTime} = options
    return {
      TYPE: type || '',
      TITLE: title || '',
      CONTENT: content || '',
      BLOCKSTYLE: blockStyle || null,
      TITLESTYLE: titleStyle || null,
      CONTENTSTYLE: contentStyle || null,
      CHANGETIME: changeTime || 'false',
    }
  },
  name: 'vuepress-plugin-boxx',
  enhanceAppFiles: resolve(__dirname, './src/enhanceAppFile.js'),
  // globalUIComponents: 'Boxx'
})