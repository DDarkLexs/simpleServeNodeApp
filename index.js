/* Grupo gerson de melo servidor */

import express from 'express'
import cors from 'cors'
import fs from 'fs-extra'
import ip from 'ip'
import ASCIIColorLog from 'ascii-color-log'

const log = new ASCIIColorLog();


const app = express()
const PORT = 2324
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