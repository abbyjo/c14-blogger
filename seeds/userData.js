const {User} = require('../models');

const userData = [
    {
        id: 1,
        username: 'coolguy',
        email: 'thecoolestguy@gmail.com',
        password: 'icecold11'
    },
    {
        id: 2,
        username: 'flightlessfanatic',
        email: 'penguinsrule35@yahoo.com',
        password: 'penguino35'
    },
    {
        id: 3,
        username: 'bibliotecha',
        email: 'booklover335@hotmail.com',
        password: 'bookzrule335',
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;