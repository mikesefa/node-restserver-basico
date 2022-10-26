
const { response, request } = require('express');


const userget = (req = request, res = response) => {
    res.json({
        msg: 'api Get'
    });
}

const userpost = (req = request, res = response) => {
    const { nombre, Apellido, edad } = req.body;

    res.json({
        msg: 'api post',
        nombre,
        Apellido,
        edad
    });
}

const userput = (req = request, res = response) => {

    const { id } = req.params;
    res.json({
        msg: 'api put'
    });
}

const userdelete = (req = request, res = response) => {
    res.json({
        msg: 'api delete'
    });
}

module.exports = {
    userget,
    userpost,
    userput,
    userdelete,
}