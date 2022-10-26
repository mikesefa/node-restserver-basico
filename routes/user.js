
const { Router } = require('express');
const { userget, userpost, userdelete, userput } = require('../controllers/user');

const router = Router();


router.get('/', userget);

//ruta con parametro id para identificar 
router.put('/:id', userput);


router.post('/', userpost);

router.delete('/', userdelete);





module.exports = router; 