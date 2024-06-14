const sinon = require("sinon");

const mockAsync = (model, module, result = null) => {
  return sinon.stub(model, module).resolves(result);
};

const RESPONSE = {
  json: function (data) {
    return data;
  },
};
const USER = {
  id: "cce825bf-09d5-4c8e-a9be-9f4f4a9dba5d",
  username: "Julia",
  email: "julia@gmail.com",
  bio: "Sou a julia",
  password: "password123",
};

const FILE = (fieldName) => {
  return {
    upload: (options, callback) => {
      // Simular o upload do arquivo
      callback(null, [{ fd: "caminho/do/arquivo" }]);
    },
  };
};

module.exports = {
  mockAsync,
  RESPONSE,
  USER,
  FILE,
};
