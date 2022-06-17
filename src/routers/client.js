const express = require('express')
const hbs = require('hbs')
const Client = require('../models/Client')
const router = new express.Router()

router.get('/client',  (req, res) => {
    res.status(201).render('Client')
})


router.post('/client/set', async (req, res) => {
    const client = new Client(req.body)

    try {
        await client.save()
        res.status(201).render('setClient', {
            massage : 'your information was saved successfully as bellow: ',
            info : 'name: '+ client.Name + ', walletAddress: ' + client.walletAddress + ' .'

        } )
    } catch (e) {
        res.status(400).render('setClient', {
            message:'error: ',
            info: e
        })
    }
})

// get the latest value of the key, I used "sort" to achieve that value
router.get('/client/info/:Name', async (req, res) => {
    try {
        const client = await Client.find({Name: req.params.Name }).sort({$natural:-1}).limit(1)

        if (!client) {
            return res.status(404).render('clientInfo')
        }
        res.render('clientInfo', {
            message: 'the walletAddress for ' + client[0].Name + ' is '+ client[0].walletAddress +' . '
        })
    } catch (e) {
        res.status(500).render('clientInfo',{
            message:e
        })
    }
})


// get the history value of the key
//use foreach to get the address of each client and save it in adresses array to send back to the user
router.get('/client/History/:Name', async (req, res) => {
    const Name = req.params.Name 
    try {
        const clients = await Client.find({Name: Name })

        var addresses = []
        clients.forEach(client => {
            const address = client.walletAddress 
            addresses.push(address)
            res.render('clientHistory', {
                message: 'all the walletAdresses for ' + Name + ' : ' ,
                info :addresses
            })      
        });
        
    } catch (e) {
        res.status(500).render('clientHistory', {addresses: e})
    }
})



module.exports = router