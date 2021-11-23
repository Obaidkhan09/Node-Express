//Will Understand Export.module in 02-main
//02-module_1 & 02-module_2 are connected to this.file

//  CommoneJS   -   Every file in Node is a module. (Node uses commonJS under the hood).
//  Modules     -   Encapsulated Code   (only share minimum, refer to the concept of encapsulation in OOP)

const employee01 = require('./02-module_1');
const printFunction = require('./02-module_2');

// console.log(`${employee01.firstName} ${employee01.lastName}'s' Total Salary is ${employee01.totalSalary}.`);

//  NOTE: basicSalary, bonus, insurance is not accessble from here, but only the exported var.
// console.log(typeof(printFunction));
printFunction(employee01);