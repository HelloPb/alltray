var express = require('express');
var router = express.Router();

const jsonServer = require('json-server');
const mock = jsonServer.router('db.json');

/* GET users listing. */
router.get('/c', function (req, res, next) {

  const c = mock.db.get('c').value();

  let r = [];

  if (req.query.name) {
    c.forEach(element => {
      if (element.name.indexOf(req.query.name) !== -1) {
        r.push(element);
      }
    });
  } else {
    r = c;
  }

  res.send(r);

});

module.exports = router;
