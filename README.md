# Let's Read

### Deploy link

https://shrouded-island-87216.herokuapp.com/

Project Let's Read allows users to read stories and count number of active views and total views on a story.

## Authentication
* This project has a basic login and signup system.
* Users can signup using the signup link provided on login page.
* There are a few users already present in the system for testing you can login to them using the following credentials.
* * user: greenishtatch    pass: greenishtatch
* * user: tonguehelena    pass: tonguehelena

## Home Page
* Home page contains a list of stories. You can click on any story to view them.
* Sorting button is provided on top left corner to sort the sotries according to date published or view count.
* Stories that the user has alread read is marked with green color whereas unread stories are marked with gray color

## Story Page
* On story page user can read the story. 
* The top left corner displays the total views on the story and the active users who are reading the story.

## Development Stack
* This project is build with nodejs and uses MySql as its database. 
* This project runs using express server and maintains the session using express session.
* To calculate the active users Stack.io library is used.

