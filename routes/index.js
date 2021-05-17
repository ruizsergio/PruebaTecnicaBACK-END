const express =require('express')
var Registro = require('../controller/t001_transaction_controller')
var router = express.Router()





router.get('/',Registro.Registros)
router.post('/',Registro.RegistrosGet)
router.put('/:id',Registro.RegistrosPut)
router.get('/:id',Registro.RegistrosGetId)
router.delete('/:id',Registro.RegistrosDelete)





module.exports= router