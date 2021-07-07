const chai = require('chai');
const should = require('should');
const http = require('chai-http'); // Extensão da lib chai p/ simular requisições http
const subSet = require('chai-subset'); // Extensao da lib chai p/ verificar objetos
const pages = require('../app/routes/pages');// Arquivo a ser testado
const { get } = require('../app/routes/pages');
const Car = require('../app/models/carro');

chai.use(http);
chai.use(subSet);


//Teste das APIs 
describe('Veículos', () => {

        it('Teste de conexão da rota/get', async (done) => {
        chai.request('http://localhost:8081')//Endereço do servidor
            .get('../routes/pages/consulta')
        done();
        });

        it('Teste de conexão da rota/create', async (done) => {
            chai.request('http://localhost:8081')//Endereço do servidor
                .post('../routes/pages/newCar')
            done();
        });

        it('Teste de conexão da rota/update', async (done) => {
            chai.request('http://localhost:8081')//Endereço do servidor
                .put('../routes/pages/atualizar/:id')
            done();
        });

        it('Teste de conexão da rota/delete', async (done) => {
            chai.request('http://localhost:8081')//Endereço do servidor
                .delete('../routes/pages/deletar/:id')
            done();
        });

        it('Teste de conexão da rota/consulta', async (done) => {
            chai.request('http://localhost:8081')//Endereço do servidor
                .get('../routes/pages/consulta/:id')
            done();
        });

});
