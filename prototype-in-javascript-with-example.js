// object cat with fullName method
var cat = {
    firstName: "Smoky",
    lastName: "Sam",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Object dog without method fullName
var dog = {
    firstName: "Kitty",
    lastName: "Buddy",
};

// Inherite the fullName method to dog
dog.prototype = cat;

// Dog dog.prototype.fullName holds the scope of cat 
// So use apply method to change the scope to the dos
console.log(cat.fullName());
console.log(dog.prototype.fullName.apply(dog));

// output
// Smoky Sam
// Kitty Buddy
