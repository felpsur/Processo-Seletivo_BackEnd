const bd = require('../models/carro.js');

//APIs
module.exports = {

    //Método de criação de carros: acessar em POST http://localhost:8081/create
    async create(req, res, next){
        const carro = {placa:req.body.placa, chassi:req.body.chassi, renavam:req.body.renavam, modelo:req.body.modelo, marca:req.body.marca, ano:req.body.ano}
        const carCreated = await bd.create(carro);
        res.send (carCreated);
    },
    //Método de vizualização de carros: acessar em GET http://localhost:8081/get
    async get(req, res, next){
        const viewCar = await bd.findAll();
        res.send (viewCar);
    },
    //Método de atualização de carros: acessar em PUT http://localhost:8081/update/:id
    async update(req, res, next){
        const attCar = req.body;
        const id = req.params.id;
        carro = bd.update(attCar, {where: {id:id}});
        res.send(attCar);
    },
    //Método para deletar carros: acessar em DELETE http://localhost:8081/delete/:id
    async delete(req, res, next){
        const id = req.params.id;
        carro = bd.destroy({where: {id:id}});
        res.send(carro);
    },
    //Método de vizualização de carros por ID: acessar em GET http://localhost:8081/get/:id
    async get(req, res, next){
        const id = req.params.id;
        const viewCar = await bd.findAll({where: {id:id}});
        res.send (viewCar);
    }
}

