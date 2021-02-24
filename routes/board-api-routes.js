const db = require('../models');

module.exports = (app) => {
  // GET all boards belonging to the user
  app.get('/api/boards', function (req, res) {
    db.Board.findAll({
      where: {
        UserId: req.user.id,
      },
    }).then((dbBoard) => res.json(dbBoard));
  });

  // POST a new board
  app.post('/api/boards', function (req, res) {
    db.Board.create({
      name: req.body.name,
      UserId: req.user.id,
    })
      .then((dbBoard) => res.json(dbBoard))
      .catch((error) => {
        if (error) throw error;
      });
  });

  // PUT changes to a board name
  app.put('/api/boards/:id', function (req, res) {
    db.Board.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((dbBoard) => res.json(dbBoard));
  });

  // DELETE a board
  app.delete('/api/boards/:id', function (req, res) {
    db.Board.destroy({
      where: {
        id: req.params.id,
      },
    }).then((dbBoard) => res.json(dbBoard));
  });
};
