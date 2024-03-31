// Write your solution in this file!
const employee = {
    name: "John Doe",
    streetAddress: "123 Kimathi Street"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object using the spread operator to copy the original employee object
    // and then override the value for the specified key
    return {
      ...employee,
      [key]: value
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the employee object directly
    employee[key] = value;
    
    // Return the updated employee object (optional)
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object by spreading the properties of the original employee object
    const updatedEmployee = { ...employee };
    
    // Delete the property with the specified key from the new object
    delete updatedEmployee[key];
    
    // Return the new object without the specified key-value pair
    return updatedEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the property with the specified key from the employee object
    delete employee[key];
    
    // Return the modified employee object (optional)
    return employee;
  }