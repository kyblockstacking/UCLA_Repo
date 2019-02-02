# **Instructions**

* In this activity we are going to make two constructors in two different files in which one constructor calls upon the other within it.

* The first constructor function is called "Student" and has the following properties within it...

  * Name of the student
  * Favorite subject
  * Current GPA

* The second constructor function is called "Classroom" and has the following properties within it...

  * An array of students within the class
  * Number of students in the class (this value should increment as new students are added)
  * Name of the professor
  * Room number
  * The Student constructor function from above which adds a new student to the class

* **BONUS**: Add error checking so that a student can't be created if not all of their info is provided. Also try to limit how many students can be in a class. For instance, if there are already 10 students in the class, you should get an error if you try to add any more.
