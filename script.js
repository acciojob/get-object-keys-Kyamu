//your JS code here. If required.
// Create the student object with a name property
const student = {
  name: 'John Doe'
};

// Add the getKeys method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Call the getKeys method on the student object to get all its keys
const keys = student.getKeys();

console.log(keys); // ["name"]

