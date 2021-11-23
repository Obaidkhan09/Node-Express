var printDetails = (employeeObj) => {
    console.log(`${employeeObj.firstName} ${employeeObj.lastName}'s' Total Salary is ${employeeObj.totalSalary}.`);
}
module.exports = printDetails;
//  console.log(module.exports);
// another wayto export is simply initialize & export at same
// module.exports.<nameOf/var/obj/array> = define...