const express = require("express");

const app = express();

app.get('/me', (request, response) => {
    console.log(request.method)
    response.status(200).json({
        name: 'Carlos Prado',
        age: '20',
        pais: 'Venezuela',
        verb:request.method
    })
    
})

app.post('/hobbies',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        hobbies:
        ['Programar','Jugar fornite','Hacer proyecto Frontend'],
        verb:req.method
    })
})

app.patch('/metas',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        metas:
        ['Trabajar como frontend developer','Trabajar crecer como Web developer'],
        verb:req.method
    })
})

app.put('/business',(req,res)=>{
    console.log(res.method)
    res.status(200).json({
        business:
        ['Amazon','Mercadolibre','Globant'],
        verb:req.method
    })
})



app.listen(5000, () => {
    console.log('Server started at port 8000')
})


//? HTTP
//* Verbos
// GET
// POST
// PUT
// PATCH
// DELETE
//* Status
// 100
// 200
// 300
// 400
// 500
//* Headers
