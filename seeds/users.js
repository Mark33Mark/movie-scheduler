const { users } = require('../models');

const usersData = [
  {
    user_id: 1,
    user_name: '',
    email: ''
  },
];

const seedUsersData = () => users.bulkCreate(usersData);

module.exports = seedUsersData;


