const express = require('express')
const router = express.Router()



//1.get all products
router.get('/', async(req, res) => {
   await Product.findById(req.par)
    res.send('not written!')
  })
  
//2.get a product by id
router.get('/:productsid', async(req, res) => {
  try{
    await Product.findById(req.params.productsid)
    res.status(200).json(Product)
  }
  catch(error){
    res.status(404).send('no product')
  }
  })
  
//3.add a product
router.post('/', (req, res) => {
    res.send('Got a POST request')
  })
  
//4.update a product
router.patch('/:productsid', (req, res) => {
    res.send('Got a PUT request at /products')
  })
  
//5.delete a product

router.delete('/:productsid', (req, res) => {
    res.send('Got a DELETE request at /user')
  })

module.exports = router