const mongoose = require('mongoose')
const validator = require('validator')

// the client model that contains two diffrent parameters: name as the key and the wallet address as the value)
const Client = mongoose.model('Client', {
    Name: {
        type: String,
        required: true,
        trim: true
    },
    walletAddress: {
        type: String,
        required: true,
        trim: true
        
    }
})

module.exports = Client