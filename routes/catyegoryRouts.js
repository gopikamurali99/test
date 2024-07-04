const express = require('express');
const Category = require('../Model/categorymodel');
const router = express.Router()

// middleware that is specific to this router
//1.get all category
router.get('/', async(req, res) => {
    const categories = await Category.find({});
    res.json(categories)
  })
//2.get a category by id
router.get('/:categoryid', async(req, res) => {
  try{
    await Category.findById(req.params.categoryid).exec();
    res.status(200).json(Category)
  }
  catch(error){
    res.status(404).send('category not found')

  }
   
  })
//3.add a category
router.post('/', (req, res) => {
    console.log(req.body)
    const categorydata=req.body
    res.send('Got a POST request in category')
   
  })
//4.update a category
router.patch('/:categoryid', (req, res) => {
    res.send('Got a patch request at /category')
  })
//5.delete a category
router.delete('/:categoryid', (req, res) => {
    res.send('Got a DELETE request at /category')
  })


module.exports = router