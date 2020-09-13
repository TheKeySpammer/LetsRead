const db = require('./database');
const models = require('../models/Models');
const { sequelize } = require('./database');
const { User } = require('../models/Models');


module.exports = {
    user: {
        createUser: (data) => {
            return models.User.create({...data});
        },
        userExists: (username, password) => {
            return new Promise((resolve, reject) => {
                models.User.findOne({where: {username: username}}).then(function(user) {
                    if (user == null) {
                        resolve(null);
                    }
                    if (user.correctPassword(password)) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }).catch(err => {
                    console.log(err);
                    reject('DB ERROR');
                });
            });
        }
    },

    story: {
        getAllStory: (sort_by) => {
            return new Promise((resolve, reject) => {
                if (sort_by == 'date') {
                    db.sequelize.query("SELECT `Stories`.* , COUNT(`UserId`) as `views` FROM `Stories` LEFT JOIN `StoryViews` ON `StoryViews`.`StoryId` = `Stories`.`id` GROUP BY `Stories`.`id` ORDER BY `date_published` DESC").then(res => {
                    resolve(res);
                    }).catch(err => {
                        reject(err);
                    });
                }else if (sort_by == 'views') {
                    db.sequelize.query("SELECT `Stories`.* , COUNT(`UserId`) as `views` FROM `Stories` LEFT JOIN `StoryViews` ON `StoryViews`.`StoryId` = `Stories`.`id` GROUP BY `Stories`.`id` ORDER BY `views` DESC").then(res => {
                    resolve(res);
                    }).catch(err => {
                        reject(err);
                    });
                }
            });
        },
        getUserStories: (username) => {
            return new Promise((resolve, reject) => {
                User.findOne({where: {username}}).then((user) => {
                    db.sequelize.query("SELECT `StoryId` FROM `StoryViews` WHERE `UserId` = "+user.id).then(stories => {
                        resolve(stories);
                    }).catch(err => {
                        reject(err);
                    });
                });
            });
        },
        getStory: (id) => {
            return new Promise((resolve, reject) => {
                models.Story.findByPk(id).then(story => {
                    resolve(story);
                }).catch(error => {
                    reject(error);
                });
            });
        },
        setStoryRead: (id, username) => {
            return new Promise((resolve, reject) => {
                User.findOne({where: {username}}).then((user) => {
                    models.Story.findByPk(id).then(story => {
                        if (user.hasStory(story).then(res => {
                            if (!res) {
                                user.addStory(story).then(() => {
                                    resolve(true);
                                });
                            }else{
                                resolve(true);
                            }
                        }));
                    }).catch(error => {
                        reject(error);
                    });
                }).catch(err => {
                    reject(err);
                });
            });
        },
        getStoryViews: (id) => {
            return new Promise((resolve, reject) => {
                models.Story.findByPk(id).then(story => {
                    story.getUsers().then(users => {
                        resolve(users.length);
                    }).catch(err => {
                        reject(err);
                    });
                }).catch(error => {
                    reject(error);
                });
            });
        }
    }
    
}