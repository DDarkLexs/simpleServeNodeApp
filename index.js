/* Grupo gerson de melo servidor */

// import express from 'express'
const cors =  require('cors')
const fs = require('fs-extra')
const ip = require('ip')
const ASCIIColorLog = require('ascii-color-log')
const express = require("express")


const log = new ASCIIColorLog();


const app = express()
const PORT =  process.env.PORT || 1010
app.use(cors())


/* Rotas */

app.use(express.static('./src/public'))



/* ============================================== */





app.get('/dados', (req,res) => {

    res.json([

        {nome:'antonio'},
        {nome:'teresa'},
        {nome:'micaela'}
    
    ])

})




app.listen(PORT, () => {

    
        console.clear()
        
        log.success(`Grupo Gerson de Melo`)
        log.info(`Localhost: 127.0.0.1:${PORT}`)
        log.info(`Network: ${ip.address()}:${PORT}`)


})