require('dotenv').config()
const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})

//route to connect contact
app.get('/contact', (req, res) => {
    res.sendFile(join(__dirname,
        './public/index.html'
        ))
})

//route to connect portfolio
app.get('/portfolio', (req, res) => {
    res.sendFile(join(__dirname,
        './public/index.html'
        ))
})
//route to connect * with index.html
app.get('*', (req, res) => {
    res.sendFile(join(__dirname,
        'index.html'
        ))
})

require('mongoose').connect(process.env.MONGODB_URI || process.env.LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.error(err))