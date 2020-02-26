module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'contact': {
      entry: './src/pages/Contact/main.js',
      template: 'public/index.html',
      title: 'Contact',
      chunks: ['chunk-vendors', 'chunk-common', 'contact']
    },
    'dictionary': {
      entry: './src/pages/Dictionary/main.js',
      template: 'public/index.html',
      title: 'Dictionary',
      chunks: ['chunk-vendors', 'chunk-common', 'dictionary']
    },
    'translator': {
      entry: './src/pages/Translator/main.js',
      template: 'public/index.html',
      title: 'Translator',
      chunks: ['chunk-vendors', 'chunk-common', 'translator']
    },
    'privacy': {
      entry: './src/pages/Privacy/main.js',
      template: 'public/index.html',
      title: 'Privacy',
      chunks: ['chunk-vendors', 'chunk-common', 'privacy']
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ?
    '/ich_lerne_deutsch/' : '/'
}