import _ from 'lodash'
import models from '../db/models'
import express from 'express';
const projectsRouter = express.Router();

/* GET projects listing. */
projectsRouter.get('/', function(req, res, next) {
  models.Project.findAll({
    include: [models.User]
  }).then(projects => res.send(projects));
});

/* GET project item. */
projectsRouter.get('/:project_id', function(req, res, next) {
  models.Project.findAll({
    where: {
      id: req.params.project_id
    }
  }).then(projects => res.send(projects));
});

/* Put project. */
projectsRouter.put('/:project_id', function(req, res, next) {
  models.Project.update({
    name: req.body.name,
    UserId: req.body.user_id,
  }, {
    where: {
      id: req.params.project_id
    }
  }).then(project => res.send(project));
});

/* Post project. */
projectsRouter.post('/', function(req, res, next) {
  models.Project.create({
    name: req.body.name,
    UserId: req.body.userId,
  }).then(updated => res.send(updated));
});

/* Delete project. */
projectsRouter.delete('/:project_id', function(req, res, next) {
  models.Project.destroy({
    where: {
      id: req.params.project_id
    }
  }).then(deleteupdated => res.send({ deleteupdated }));
});

export default projectsRouter;
