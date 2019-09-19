import _ from 'lodash'
import models from '../db/models'
import express from 'express';
const personsRouter = express.Router();

/* GET persons listing. */
personsRouter.get('/', function(req, res, next) {
  models.Person.findAll().then(persons => res.send(persons));
});

/* GET person item. */
personsRouter.get('/:person_id', function(req, res, next) {
  models.Person.findAll({
    where: {
      id: req.params.person_id
    }
  }).then(persons => res.send(persons));
});

/* Put person. */
personsRouter.put('/:person_id', function(req, res, next) {
  models.Person.update({
    name: req.body.name,
    birthday: req.body.birthday,
    hobbies: req.body.hobbies,
  }, {
    where: {
      id: req.params.person_id
    }
  }).then(person => res.send(person));
});

/* Post person. */
personsRouter.post('/', function(req, res, next) {
  models.Person.create({
    name: req.body.name,
    birthday: req.body.birthday,
    hobbies: req.body.hobbies,
  }).then(updated => res.send(updated));
});

/* Delete person. */
personsRouter.delete('/:person_id', function(req, res, next) {
  models.Person.destroy({
    where: {
      id: req.params.person_id
    }
  }).then(deleteupdated => res.send({ deleteupdated }));
});

export default personsRouter;
