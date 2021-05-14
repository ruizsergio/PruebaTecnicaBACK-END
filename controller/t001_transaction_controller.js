const t001_transaction = require('../models/t001_transaction')

const Registro_controller ={


     Registros: async(req,res)=>{
        const response = await t001_transaction.findAll()
        .then(function(data){
          const res = { success: true, data: data }
          return res;
        })
        .catch(error =>{
          const res = { success: false, error: error }
          return res;
        })
        res.json({response});
        

     },
     RegistrosGet: async ( req, res) =>{
      try {
          const {description,monto}= req.body;
        const response = await t001_transaction.create({
          VA_DESCRIPTION:description,
          FE_CREATE_ON:new Date(),
          
          VA_AMOUNT:monto,
          
          
        })
        .then(function(data){
          const res = { success: true, data: data, message:"created successful" }
          return res;
        })
        .catch(error=>{
          const res = { success: false, error: error }
          return res;
        })
        res.json(response);
    
      } catch (e) {
        console.log(e);
      }
    },
    RegistrosPut:async ( req, res) =>{

      try {
    
        const { id } = req.params;
        const {description,monto}= req.body;
      
    
        const response = await t001_transaction.update({
          VA_DESCRIPTION:description,
          VA_AMOUNT:monto
        },{
          where: { NU_ID: id}
        })
        .then(function(data){
          const res = { success: true, data: data, message:"updated successful" }
          return res;
        })
        .catch(error=>{
          const res = { success: false, error: error }
          return res;
        })
        res.json(response);
    
      } catch (e) {
        console.log(e);
      }
    }
,    
   
    RegistrosDelete:async ( req, res) =>{

      try {
    
        const { id } = req.params;
    
        const response = await t001_transaction.destroy({
          where: { NU_ID:id }
        })
        .then( function(data){
          const res = { success: true, data: data, message:"Deleted successful" }
          return res;
        })
        .catch(error => {
          const res = { success: false, error: error }
          return res;
        })
        res.json(response);
    
      } catch (e) {
        console.log(e);
      }
    }
    
    

}

module.exports = Registro_controller