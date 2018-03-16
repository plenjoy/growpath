const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
  })

const context = {
  title: 'hello',
  meta: `
    <meta name="description" content="abc" id="description">
    <meta name="keywords" content="abc" id="keywords">
  `
}
server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>your url is abc: {{ url }}</div>`
  })
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      ${html}
    `)
  })

})
server.listen(8080)