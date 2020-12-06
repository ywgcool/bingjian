const express = require('express')
const path = require('path')

const app = express()

// 开放public静态资源
app.use('/public', express.static(path.join(__dirname, '/public')))
// 模板引擎使用 html
app.engine('html', require('express-art-template'))

// 重定向到首页
app.get('/', (req, res) => {
  res.redirect('/index')
})

app.get('/:page', (req, res) => {
  const { page } = req.params
  if (page !== 'favicon.ico') {
    console.log(page + '.html');
    res.render(page + '.html', {
      title: page
    })
  }
})

app.listen('4050', () => {
  console.log('running in 4050')
})
