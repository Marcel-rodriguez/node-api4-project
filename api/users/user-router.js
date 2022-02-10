const express = require('express');

const userModel = require('./user-model')


const router = express.Router()

router.get('/', (req,res, next) => {
    try{
        res.status(200).json({message: "Get works"})
    } catch(err) {
        next(err)
    }
})

router.use((err,req,res,next) => {
    res.status(err.status || 500).json({
        custom: 'something went wrong in the user router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router