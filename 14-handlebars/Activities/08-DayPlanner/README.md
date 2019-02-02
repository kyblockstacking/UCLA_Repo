# Instructions

* Copy the contents of `schema.sql` into MySQL Workbench to create the database and initial data. `npm install` the dependencies, then run the app. Test it out in the browser.

* Now go through the code with a partner, starting with the routes in `server.js` and then the handlebar templates. Research any new concepts that you don't recognize.

* In particular, notice that the front-end Ajax requests and back-end routes are using PUT and DELETE to perform certain actions. What is the purpose of these? Could we have used a POST instead?

* Once you understand the existing app, with your partner, think about something more you can add to push your skills. With any in-class activity, adding extra features on top of the given examples is a great way to further learn. If you can't think of your own improvements to make, you could try ours:

* What if each plan included the day of the week (or time of day)? The `/` route would still display all plans, but then additional routes like `/sunday` or `/monday` would only show plans for that day. Another neat feature would be to allow changing the day as part of the "update a plan" form.

* Also, since our front-end code is becoming more complicated, it would help to move the JS logic into a separate file. Try linking to an external stylesheet while you're at it.