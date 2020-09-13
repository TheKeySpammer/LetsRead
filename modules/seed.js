const User = require('./database');
const utility = require('./utility');

const usernames = [
'delicioushut',
'outlineworkbasket',
'kentledgegloaming',
'independentunbiased',
'shenzhencatenary',
'crumbleelk',
'oceanprovide',
'rovermickey',
'monorailtesting',
'tonguehelena',
'adjointsalisbury',
'highlightawful',
'gelatinvixen',
'commentinstant',
'yumdavid',
'greenishtatch',
];

module.exports = function () {
    data = [{
            username: 'greenishtatch',
            first_name: 'Zhongwei',
            last_name: 'Rosen',
            email: 'cnivaldo.passos0@chanmelon.com',
            password: 'greenishtatch',
        },
        {
            username: 'tonguehelena',
            first_name: 'Kenroku',
            last_name: 'Malabarba',
            email: 'owa7shny.qal@mailperfetch.com',
            password: 'tonguehelena',
        },
    ]

    data.forEach(d => {
        utility.user.createUser(d).then(u => {
            console.log("User Successfully created with id: ", u.id);
        }).catch(err => {
            console.log("Error Creating User:", err);
        });
    });
}