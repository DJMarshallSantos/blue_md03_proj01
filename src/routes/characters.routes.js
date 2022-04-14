const router = require('express').Router();
const charactersController = require('../controllers/characters.controller');

router.get('/find-characters', charactersController.findCharactersController);
router.get('/find-character/:id', charactersController.findCharacterByIdController);

router.post('/create', charactersController.createCharacterController);

router.put('/update/:id', charactersController.updateCharacterController);

router.delete('/delete/:id', charactersController.deleteCharacterController);

module.exports = router;
