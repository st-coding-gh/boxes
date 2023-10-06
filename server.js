import Express from 'express'
const app = Express()
const port = 3333

app.get('/', (req, res) => {
  res.json({
    project: 'boxes',
    stack: ['express', 'webpack', 'react'],
    description: 'an application to manage storage on shelves',
  })
})

app.listen(port)
