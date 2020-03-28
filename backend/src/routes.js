const { Router } = require('express');

const ongController = require('./controllers/ong.controller');
const incidentsController = require('./controllers/incidents.controller');
const profileController = require('./controllers/profile.controller');
const sessionController = require('./controllers/session.controller');

const routes = Router();

routes.post('/sessions', sessionController.login);

routes.get('/ongs', ongController.listAll);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.list);

routes.get('/incidents', incidentsController.listAll);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;