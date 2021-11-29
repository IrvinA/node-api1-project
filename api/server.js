const express = require('express');
const User = require('./users/model');
const server = express();
server.use(express.json());

server.post('/api/users', async (req, res) => {
  try {
    const { name, bio } = req.body;
    if (!name || !bio) {
      res
        .status(400)
        .json({ message: 'Please provide name and bio for the user' });
    } else {
      const user = await User.insert({ name, bio });
      res.status(201).json(user);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'There was an error while saving the user to the database',
      });
  }
});

module.exports = server;
