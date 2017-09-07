/**
 * Created by SeoJung on 2017. 5. 14..
 */
const path = require('path')
const express = require('express')
const compression = require('compression')

const app = express()
app.use(compression())

const PORT = 3000

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', function(request, response) {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
})
