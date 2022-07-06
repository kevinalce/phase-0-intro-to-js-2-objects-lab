// Write your solution in this file!
 const employee = {
     name : 'sam',
     streetAddress : '11 Broadway'
 }
 function updateEmployeeWithKeyAndValue(employee, Key, Value){
     const newObj = {...employee}
     newObj[Key] = Value;
     return newObj;
 }
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, Key, Value){ 
    employee[Key] = '12 Broadway'
     return employee;
 }
function deleteFromEmployeeByKey(employee, Key){
    let newEmployee = {...employee}
    delete newEmployee[Key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(empolyee, Key){
    delete employee[Key];
    return employee;
}