const express = require('express')
const blog = require('./routs/blog')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)

app.get('/', (req, res) => {
  console.log("Get request");
  res.send('Hello World! get')
})

app.post('/', (req, res) => {
  console.log("Post request");
  res.send('Hello World! post')
})


app.put('/', (req, res) => {
  console.log("put request");
  res.send('Hello World! put')
})

app.get('/index', (req, res) => {
  console.log("Get request index");
  res.sendFile('templates/index.html', {root: __dirname})
})


app.get('/api', (req, res) => {
  res.json({a:1, b:2, c:3, name:["dhruv", "tony"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})