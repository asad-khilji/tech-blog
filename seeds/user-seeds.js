const { User } = require('../models');

const userData = [
  {
    username: 'muhammad',
    password: 'test1'
    
  },
  {
    username: 'asad',
    password: 'test2'
  },
  {
    username: 'khilji',
    password: 'test3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;