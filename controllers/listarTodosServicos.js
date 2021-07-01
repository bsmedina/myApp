const modelTodosServicos = require('../models/servicosModels'); // importa do model, a lista que veio do banco de dados

//exporta toda a lista de serviços e executa a função de listar todos os serviços
exports.retornarListaTodosServicos = () => modelTodosServicos.listarTodosServicos();
