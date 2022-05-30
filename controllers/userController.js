const { PrismaClient } = require('@prisma/client');

const { user, post } = new PrismaClient();

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  const userCreated = await user.create({
    data: {
      name,
      email,
    },
  });
  res.status(201).json({ userCreated });
};

exports.getUsers = async (req, res) => {
  const users = await user.findMany({});

  res.status(201).json({ users });
};

exports.upateUsder = async (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id);

  const { name, email } = req.body;
  const userFind = await user.update({
    where: { id: userId },
    data: {
      name,
      email,
    },
  });
  res.status(200).json({ userFind });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id);

  await user.delete({
    where: { id: userId },
  });
  res.status(200).json({ msg: 'User will be deleted' });
};

exports.createPost = async (req, res) => {
  const { name, userId } = req.body;

  const createdPost = await post.create({
    data: {
      name,
      userId,
    },
  });

  res.status(201).json({ createdPost });
};
