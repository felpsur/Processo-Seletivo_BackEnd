const bd = require('./carro.js');

module.exports = {
    async create(req, res, next){
        const carro = {placa:req.body.placa, chassi:req.body.chassi, renavam:req.body.renavam, modelo:req.body.modelo, marca:req.body.marca, ano:req.body.ano}
        const carCreated = await bd.create(carro);
        res.send (carCreated);
    },
    async get(req, res, next){
        const viewCar = await bd.findAll();
        res.send (viewCar);
    },
    async update(req, res, next){
        const attCar = req.body;
        const id = req.params.id;
        carro = bd.update(attCar, {where: {id:id}});
        res.send(attCar);
    },
    async delete(req, res, next){
        const id = req.params.id;
        carro = bd.destroy({where: {id:id}});
        res.send(carro);
    },
    async get(req, res, next){
        const id = req.params.id;
        const viewCar = await bd.findAll({where: {id:id}});
        res.send (viewCar);
    }
}

