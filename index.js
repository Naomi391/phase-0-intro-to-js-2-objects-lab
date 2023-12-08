// Write your solution in this file!
let employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newWorker = { ...employee };

  newWorker[key] = value;
  return newWorker;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;

  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  const newWorker = delete newEmployee.key;
  return newWorker;
}

/*
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
}
*/
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
}
