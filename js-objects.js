const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(person.fullName.call(person1))

const person = {
  fullName: function(city, state) {
    return this.firstName + " " + this.lastName+ " -- "+city+ " -- "+state;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

console.log(person.fullName.call(person1, "Lucknow", "up"))

const person = {
  fullName: function(city, state) {
    return this.firstName + " " + this.lastName+ " -- "+city+ " -- "+state;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
console.log(person.fullName.apply(person1, ["Lucknow", "up"]))
