# **Instructions**

Callbacks are necessary when passing asynchronous data from one module to another. In this case, we have a `file.js` module that reads/writes to text files, but it's our `main.js` script that needs to be able to access this information.

1. In `file.js`, update the "read" method to accept one argument. Since the argument will represent a callback function, let's name it "cb": `this.read = function(cb) ...`

2. Inside of the fs.readFile, let's call the "cb" function. It's as simple as writing: `cb()`. Of course, we're going to want to pass this callback some information, so include the response data from fs.readFile: `cb(res)`.

3. Jump over to `main.js`. Note that we are calling the read method here, but we just updated the read method earlier to accept an argument now. The argument it wants is a function, so let's include a function:

```
  test.read(function() {

  });
```

However, when `file.js` calls this function, it tries to pass it some data. We'll need to add an argument to be able to capture that data:

```
  test.read(function(data) {
    console.log(data);
  });
```

If everything went according to plan, we should be able to console.log the text file data in `main.js`, _NOT_ `file.js`.