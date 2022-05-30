const {
  createUser,
  getUsers,
  upateUsder,
  deleteUser,
  createPost,
} = require('../controllers/userController');

const router = require('express').Router();

router.route('/create').post(createUser);
router.route('/').get(getUsers);
router.route('/:id').patch(upateUsder).delete(deleteUser);
router.route('/post').post(createPost);

module.exports = router;
