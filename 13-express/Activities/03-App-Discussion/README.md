# Express App Discussion

With a partner, cd into this folder and run `npm install`. Then run `node server.js`. Once the terminal says, "App listening on port 3000," go to <http://localhost:3000> in your browser to see the live website. Now answer the following questions:

* Why did we have to navigate to `localhost` instead of just right-clicking and opening the HTML file directly? What's the difference between `localhost` and `file://`?

* If you navigate to <http://localhost:3000/hello.html> in the browser, you'll see a web page, but we don't have a file called `hello.html` anywhere. So where did this content come from?

* Now navigate to <http://localhost:3000/portfolio.html>. Why doesn't this work, even though we have a `portfolio.html` file in this folder?

* In the `server.js` file, try changing line 17 to say "Goodbye World." Refresh the browser. Why don't we see our change? What do we have to do to fix this?

* On line 12, what does `__dirname` mean? Why do we have to use it? What happens if we remove it and restart the server?

* Stop the server and change the `PORT` variable on line 8 to 8080. Start the server again. What address do you have to go to now in the browser to see your website?

* Try creating your own GET route with Express that either sends back a string or sends back an HTML file. Test it in the browser to see if it works.

* **NOTE:** To stop/restart your server, you must press Ctrl+C in the terminal. It is the same for Windows and Mac.