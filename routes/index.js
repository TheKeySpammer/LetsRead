var express = require('express');
var router = express.Router();

const utility = require('../modules/utility');
const middleware = require('../modules/middleware');


/* GET home page. */
router.get('/', middleware.auth.loggedIn(), function(req, res, next) {
  // Get all Stories
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var sort_by = 'date';
if (Object.keys(req.query).length !== 0) {
  sort_by = req.query.sort_by;
}

var stories_data = [];
  utility.story.getAllStory(sort_by).then(stories => {
    utility.story.getUserStories(req.session.username).then(userStories => {
  
      stories[0].forEach(story => {
        var temp = {
          id: story.id,
          title: story.title,
          content: story.content,
          date_published: story.date_published.getDate()+' '+monthNames[story.date_published.getMonth()]+', '+story.date_published.getFullYear(),
          views: story.views,
          read: false,
        }

        if (temp.content.length > 20) {
          temp.content = temp.content.substring(0, 100)+'...';
        } 
        var read = false;
        userStories[0].forEach(us => {
          if (us.StoryId == temp.id) {
            read = true;
          }
        });
        temp.read = read;
        stories_data.push(temp);
      });

      res.render('dashboard', {stories_data, username: req.session.username});
    }).catch(err => {
      console.log(err);
    });
  }).catch(err => {
    console.log(err);
  });
});


router.get('/story/:id', middleware.auth.loggedIn(), function(req, res, next) {
  let id = parseInt(req.params.id);
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
  utility.story.getStory(id).then(story => {
    utility.story.setStoryRead(id, req.session.username).then(() => {
      utility.story.getStoryViews(id).then(views => {
        var pub_date = story.date_published.getDate()+' '+monthNames[story.date_published.getMonth()]+', '+story.date_published.getFullYear()
        res.render('story', {story, views, username: req.session.username, date_pub: pub_date});
      });
    });
  }).catch(err => {
    console.log(err);
  });
});

module.exports = router;
