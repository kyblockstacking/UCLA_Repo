# Instructions

* Copy the contents of `schema.sql` into MySQL Workbench to create the database and initial data. `npm install` the dependencies, then run the app. Test it out in the browser.

* Now go through the code with a partner, starting with the routes in `server.js` and then the handlebar templates. Research any new concepts that you don't recognize.

* In particular, notice that there isn't any front-end Javascript code. So how is information being posted to the back-end?

* Once you understand the existing app, with your partner, think about something more you can add to push your skills. With any in-class activity, adding extra features on top of the given examples is a great way to further learn. If you can't think of your own improvements to make, you could try ours:

* What if we added a new field to the table called "priority?" So now, whenever a new task is created, we would also capture and save a priority value. Once we have this, we should display it on the page along with the task name and ID. Tasks should now be sorted by their priority, not ID.