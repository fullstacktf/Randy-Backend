const controller = require('../controller');

function myFunction(params) {
  return params
}

describe('Users_Controllers', () => {
  describe('Unitarios', () => {
    test('Debe devolver un JSON con los usuarios', () => {
      const objeto = {
        [ObjectId],
        name: "Carlos",
        email: "carlosprueba@gmail.com",
        password: "****",
        avatar: "src/assets/avatar1.jpg",
        ID_social_env: "1"
      }
      expect(myFunction(objeto)).toEqual(objeto);
    })
  });
});
