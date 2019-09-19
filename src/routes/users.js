import _ from 'lodash'
import models from '../db/models'
import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll().then(users => res.send(users));
});

/* GET user item. */
router.get('/:user_id', function(req, res, next) {
  models.User.findAll({
    where: {
      id: req.params.user_id
    }
  }).then(users => res.send(users));
});

/* Put user. */
router.put('/:user_id', function(req, res, next) {
  models.User.update({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  }, {
    where: {
      id: req.params.user_id
    }
  }).then(user => res.send(user));
});

/* Post user. */
router.post('/', function(req, res, next) {
  models.User.create({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  }).then(updated => res.send(updated));
});

/* Delete user. */
router.delete('/:user_id', function(req, res, next) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(deleteupdated => res.send({ deleteupdated }));
});

export default router;
