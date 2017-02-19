const router = require('express').Router();
const controller = require('server/controllers/greetController');

router.route('/greetings')
  .get((req, res) => controller.getAll(req, res));

module.exports = router;

