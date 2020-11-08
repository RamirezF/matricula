const holamundo = function() {
    return "hola mundo en español";
}

const helloworld = function(){
    return "hola mundo funcionando desde inglés";
}

const modulos = function(basico, intermedio, avanzado){
    var module = [];

    if(basico!=undefined)
    {
        module.push(basico);
    }
    if(intermedio!=undefined)
    {
        module.push(intermedio);
    }
    if(avanzado != undefined)
    {
        module.push(avanzado);
    }

    return module;
}

const totalpago = function(curso,pagos, modulos)
{
    costo = 0;
    var cantidad = modulos.length;
    var total = 0;
    if(curso=='Java')
    {
        costo = 1200;
    }
    else if(curso == 'PHP')
    {
        costo = 800;
    }
    else if (curso == '.NET')
    {
        costo = 1500;
    }

    var descuento = 0;
    if (pagos == 'Efectivo')
    {
        descuento = 0.1;
    }

    total = costo*cantidad*(1-descuento);

    return total;
}

module.exports = {
    holamundo : holamundo,
    helloworld : helloworld,
    modulos : modulos,
    totalpago: totalpago
}
