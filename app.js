
const express = require('express')
const app = express();
const bodyparser = require('body-parser')


app.use(bodyparser.urlencoded({ extended: false }))

app.use("/addcart", (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})
app.use("/products", (req, res, next) => {
    res.send("<form action='/addcart' method='POST'><input type='text' name='name'/><button type='submit'>Add to cart</button></form>")
})
app.use("/", (req, res, next) => {
    res.send("<h1>Hello User</h1>")
})

app.listen(3000)