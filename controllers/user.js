
const { response } = require('express');


const userget = (req, res = response) => {
    res.json({
        msg: 'api Get'
    });
}

const userpost = (req, res = response) => {
    const { nombre, Apellido, edad } = req.body;

    res.json({
        msg: 'api post',
        nombre,
        Apellido,
        edad
    });
}

const userput = (req, res = response) => {
    res.json({
        msg: 'api put'
    });
}

const userdelete = (req, res = response) => {
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