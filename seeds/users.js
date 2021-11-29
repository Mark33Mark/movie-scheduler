const { users } = require('../models');

const usersData = [
  {
    user_id: 1,
    user_name: '',
    email: '',
    opt_in: ''
  },
];

const seedUsersData = () => users.bulkCreate(usersData);

module.exports = seedUsersData;


