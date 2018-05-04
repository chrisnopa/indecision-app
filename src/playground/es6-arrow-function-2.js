const user = {
  name: "Andrew",
  cities: ["Philly", "New-York", "Dublin"],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => {
      return  city;
    });
    return cityMessages;
  }
};
console.log(user.printPlacesLived());


const multiplier = {
  numbers: [10,20,30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
