const { Router } = require('express');
const { celebrate, Segments, Joi } = require('celebrate')

const ongController = require('./controllers/ong.controller');
const incidentsController = require('./controllers/incidents.controller');
const profileController = require('./controllers/profile.controller');
const sessionController = require('./controllers/session.controller');

const routes = Router();

routes.post('/sessions', sessionController.login);

routes.get('/ongs', ongController.listAll);
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.string().required().min(10).max(13),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}), ongController.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
}), profileController.list);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}), incidentsController.listAll);

routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}), incidentsController.delete);

module.exports = routes;