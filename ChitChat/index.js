// /**function in javascript */
// function firstFunction() {
//   const value = 100;
//   console.log(value);
// }

/**-------------------------------------------------- */

// firstFunction();

// /**define anonymous function */
// var x = function () {
//   console.log("Hello");
// };

// x();

/**-------------------------------------------------- */

//**this here refers to the windows object */
console.log(this);

/**-------------------------------------------------- */

/**create object */
const person = {
  fName: "Ashish",
  lName: "kainth",
  fullName: function () {
    //this here refers to the current object which is person
    console.log(this.fName + " -- " + this.lName); //it will print Ashish -- kainth
    console.log(this); // it will print this object person
  },
};

person.fullName();

/**-------------------------------------------------- */

/**create object */
const person1 = {
  fName: "Test",
  lName: "User",
  fullName: function () {
    //this here refers to the current object which is person
    console.log(this.fName + " -- " + this.lName); //it will print undefined -- undefined
    console.log(this); // it will print this object window
  },
};

person1.fullName.call(); //person1.fullName().call(this); both are some thing

person1.fullName.call(person1); // it will print Ashish kainth and current person1 object

/**-------------------------------------------------- */

const employee = {
  fName: "Ashish",
  lName: "Kainth",
};

const fullName = function (age, department) {
  console.log(this.fName + " " + this.lName + " " + age + " " + department);
};

fullName.call(employee, 37, "Mobile");
//call apply both same just the difference of passing arguments. in case apply pass it as an array
fullName.apply(employee, [37, "Mobile"]);

var employeeFullName = fullName.bind(employee, 37, "mobile");

//bing the method and call it

employeeFullName();
