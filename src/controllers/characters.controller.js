const characterService = require('../services/characters.service');

const findCharactersController = (req, res) => {
  res.send(characterService.findCharactersService());
};

const findCharacterByIdController = (req, res) => {
  res.send(characterService.findCharacterByIdService(req.params.id));
};
const createCharacterController = (req, res) => {
  characterService.createCharacterService(req.body);
  res.send({message: 'Character created successfully!'});
};

const updateCharacterController = (req, res) => {
  characterService.updateCharacterService(req.params.id, req.body);
  res.send({message:'Character updated successfully!'});
};

const deleteCharacterController = (req,res) => {
  characterService.deleteCharacterService(req.params.id);
  res.send({message: 'Character deleted successfully!'});
};

module.exports = {
  findCharactersController,
  findCharacterByIdController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
