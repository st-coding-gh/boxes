import express from 'express'
import fs from 'node:fs'
const app = express()
const port = 3333
const paths = ['/:controller', '/:controller/:action']

async function router(req, res) {
  const route = {}
  route.controller = req.params.controller
  route.action = req.params.action ?? 'index'

  const file = `./controllers/${route.controller}/${route.action}.js`
  if (!fs.existsSync(file)) {
    res.send(`controller does not exist at path: ${file}`)
    return
  }

  const module = await import(file)
  module.default(req, res)
}

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.use(express.static('static'))
app.get('/:controller', router)
app.get('/:controller/:action', router)

app.listen(port)
