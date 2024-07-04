const express = require('express')
const app = express()
const productsRouts=require('./routes/productRouts')
const categoryRouts=require('./routes/catyegoryRouts')
const cors = require('cors')
const mongoose = require('mongoose');
const port = 3000

app.use(cors())
app.use(express.json)
app.use('/products', productsRouts)
app.use('/category',categoryRouts)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  

  

  main().then(()=> console.log("connected")).catch(err => console.log(err));
  
  async function main() {
    await mongoose.connect('mongodb+srv://rgopikamuralik:me4WiHwrh9DUeDVH@cluster0.90n4at3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

