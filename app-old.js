const http = require('http');

// el http tambien puede entrar en una variable

http.createServer( (req, res) =>{
    
    //res.writeHeadder(200,{'Content-Type':'application/json'});
    // res.setHeader('Content-Disposition','attachment;filename=lista.csv');
    //Si digitas:
    //param:200 como respuesta significa que puede compilar
    //param: 404 da como error
    //text/plain significa que mandas un archivo de texto

    // res.writeHead(200,{'Content-type':'application/csv'});
    
    // res.write('id,nombre\n');
    // res.write('1,Fernando\n');    
    // res.write('2, María\n');
    // res.write('3, Juan\n');
    // res.write('4, Pedro\n'); 
    res.write('Hola mundo');
    res.end();

})
.listen(8080);

console.log('Escuchando el puerto ',8080);