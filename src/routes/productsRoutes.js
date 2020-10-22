const router = require('express').Router()
const products = require('../controllers/productsControllers')

router.get('/',products.listProducts)
router.get('/:id',products.listProduct)
router.post('/',products.createProduct)
router.put('/:id',products.updateProduct)
router.delete('/:id',products.deleteProduct)

module.exports = router