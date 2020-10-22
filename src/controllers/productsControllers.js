const Products = require('../models/productModel')
const productsController = {}

productsController.listProducts = async(req, res)=>{
    await Products.find({},(err, prod)=>{
        if(err)
            res.send(err)
        res.json(prod)
    })
}

productsController.listProduct = async(req, res)=>{
    await Products.findById({_id: req.params.id},(err, prod)=>{
        if(err)
            res.send(err)
        res.json(prod)
    })
}

productsController.createProduct = (req, res)=>{
    const newProd = new Products(req.body)
    newProd.save((err,prod)=>{
        if(err)
            res.send(err)
        res.json(prod)
    })
}

productsController.updateProduct = async(req, res)=>{
    await Products.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true},(err, prod)=>{
        if(err)
            res.send(err)
        res.json(prod)
    })
}

productsController.deleteProduct = (req, res)=>{
    Products.findByIdAndDelete({_id: req.params.id},(err)=>{
        if(err)
            res.send(err)
        res.json({message: 'Product deleted'})
    })
}

module.exports = productsController

