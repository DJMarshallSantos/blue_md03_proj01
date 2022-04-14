const characters = [
  {
    id: 1,
    alias: 'Superman',
    name: 'Clark Kent',
    base: 'Metropolis',
  },
  {
    id: 2,
    alias: 'Batman',
    name: 'Bruce Wayne',
    base: 'Gotham City',
  },
  {
    id: 3,
    alias: 'Wonder Woman',
    name: 'Diana Prince',
    base: 'Washington, DC',
  },
];

const findCharactersService = () => {
  return characters;
};

const findCharacterByIdService = (id) => {
  return characters.find((character) => character.id == id);
};

const createCharacterService = (newCharacter) => {
  newCharacter.id = characters.length + 1;
  characters.push(newCharacter);
  return newCharacter;
};

const updateCharacterService = (id, characterEdited) => {
  characterEdited['id'] = id;
  characters[characters.findIndex((character) => character.id == id)] =
    characterEdited;
  return characterEdited;
};

const deleteCharacterService = (id) => {
  return characters.splice(
    characters.findIndex((character) => character.id == id),
    1,
  );
};

module.exports = {
  findCharactersService,
  findCharacterByIdService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
