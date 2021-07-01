const modelServicos = require('../models/servicosModels');

exports.retornarListaServicos = (desconto) => {
    //pega a lista com todos os serviços
    const listaServicos = modelServicos.listarTodosServicos();

    //varre o array de serviços e aplica o desconto, devolvendo um novo array
    return listaServicos.map(itemDeServico => itemDeServico.preco * (1 - desconto / 100));
}

