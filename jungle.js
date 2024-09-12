class Animal {
  static remainingAnimals = 0;

  constructor(name, species, energy) {
    Animal.incrementRemainingAnimals(1);

    this.name = name;
    this.species = species;
    this.energy = energy;
  }

  static incrementRemainingAnimals(number) {
    Animal.remainingAnimals += number;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getSpecies() {
    return this.species;
  }

  setSpecies(species) {
    this.species = species;
  }

  getEnergy() {
    return this.energy;
  }

  setEnergy(energy)
  {
    this.energy = energy;
  }

  attack(target, energy) {
    if (this.energy < energy) {
      console.log(`${this.name} doesn't have enough energy to attack!`);
    } else {
      this.energy -= energy;
      target.energy -= energy;

      if (this.energy < 0) {
        this.energy = 0
      }
      if (target.energy < 0) {
        target.energy = 0
      }

      console.log(`${this.name} in to attack ${target.name}!\n${this.name}'s energy: ${this.energy}\n${target.name}'s energy: ${target.energy}`);

      if (this.energy === 0 && target.energy === 0) {
        Animal.incrementRemainingAnimals(-2);
        console.log(`Both ${this.name} and ${target.name} are out of energy.`);
      } else if (this.energy === 0) {
        Animal.incrementRemainingAnimals(-1);
        console.log(`${target.name} wins! ${this.name} is out of energy!`);
      } else if (target.energy === 0) {
        Animal.incrementRemainingAnimals(-1);
        console.log(`${this.name} wins! ${target.name} is out of energy!`);
      }
    }
  }

  eat(gain) {
    this.energy += gain;
    console.log(`${this.name} gets and gains energy!\n${this.name}'s energy: ${this.energy}`);
  }
}

class Bird extends Animal {
  constructor(name, species, canFly) {
    super(name, species, 100)
    this.canFly = canFly;
  }

  getName() {
    return super.getName()
  }

  setName(name) {
    super.setName(name)
  }

  getSpecies() {
    return super.getSpecies()
  }

  setSpecies(species) {
    super.setSpecies(species)
  }

  getEnergy() {
    return super.getEnergy()
  }

  setEnergy(energy)
  {
    super.setEnergy(energy)
  }

  getCanFly() {
    return this.canFly
  }

  setCanFly(canFly) {
    this.canFly = canFly
  }

  attack(target) {
    super.attack(target, 20)
  }

  eat() {
    super.eat(10)
  }
}

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species, 200)
    this.furColor = furColor;
  }

  getName() {
    return super.getName()
  }

  setName(name) {
    super.setName(name)
  }

  getSpecies() {
    return super.getSpecies()
  }

  setSpecies(species) {
    super.setSpecies(species)
  }

  getEnergy() {
    return super.getEnergy()
  }

  setEnergy(energy)
  {
    super.setEnergy(energy)
  }

  getFurColor() {
    return this.furColor
  }

  setFurColor(furColor) {
    this.furColor = furColor
  }

  attack(target) {
    super.attack(target, 50)
  }

  eat() {
    super.eat(20)
  }
}

class Reptile extends Animal {
  constructor(name, species, coldBlooded) {
    super(name, species, 100)
    this.coldBlooded = coldBlooded;
  }

  getName() {
    return super.getName()
  }

  setName(name) {
    super.setName(name)
  }

  getSpecies() {
    return super.getSpecies()
  }

  setSpecies(species) {
    super.setSpecies(species)
  }

  getEnergy() {
    return super.getEnergy()
  }

  setEnergy(energy)
  {
    super.setEnergy(energy)
  }

  getColdBlooded() {
    return this.coldBlooded
  }

  setColdBlooded(coldBlooded) {
    this.coldBlooded = coldBlooded
  }

  attack(target) {
    super.attack(target, 30)
  }

  eat() {
    super.eat(15)
  }
}


// DRIVER CODE: Create instances of the subclasses and use their properties and methods. You can modify this to add more attacks and eating actions.

const eagle = new Bird("Eagle", "Bird of Prey", true);
console.log(`Name: ${eagle.name}, Species: ${eagle.species}, Can Fly: ${eagle.canFly}`);

const lion = new Mammal("Lion", "Big Cat", "Golden");
console.log(`Name: ${lion.name}, Species: ${lion.species}, Fur Color: ${lion.furColor}`);

const snake = new Reptile("Snake", "Serpent", true);
console.log(`Name: ${snake.name}, Species: ${snake.species}, Cold-Blooded: ${snake.coldBlooded}`);

// Example attack
console.log("\n--- Attacks ---");
eagle.attack(lion);
lion.attack(snake);

// Display the remaining number of animals with energy
console.log(`Remaining animals with energy: ${Animal.remainingAnimals}`);

// Example eating
console.log("\n--- Eating ---");
eagle.eat();
lion.eat();
snake.eat();
