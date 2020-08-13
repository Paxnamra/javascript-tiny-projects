let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses['appetizers'];
  },
  get mains() {
    return this._courses['mains'];
  },
  get desserts() {
    return this._courses['desserts'];
  },
  set appetizers(appetizers) {
    this._courses['appetizers'] = appetizers;
  },
  set mains(mains) {
    this._courses['mains'] = mains;
  },
  set desserts(desserts) {
    this._courses['desserts'] = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      dishName: dishName,
      dishPrice: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomDish = Math.floor(Math.random() * dishes.length);
    return dishes[randomDish];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
    return `Your meal is: ${appetizer.dishName}, ${main.dishName} and ${dessert.dishName}. Total price amount: ${totalPrice}.`;
  }
}

console.log(menu.appetizers);
console.log(menu.courses);
console.log(menu._courses.courses);

menu.addDishToCourse('appetizers', 'chips', 2.99);
console.log(menu.appetizers);
console.log(menu.getRandomDishFromCourse('appetizers'));
console.log();

menu.addDishToCourse('appetizers', 'greek salad', 2.50);
menu.addDishToCourse('appetizers', 'olives', 3.40);
menu.addDishToCourse('appetizers', 'fruit smoothie', 4.12);

menu.addDishToCourse('mains', 'beef burgers', 10.20);
menu.addDishToCourse('mains', 'hunders stew', 8.60);
menu.addDishToCourse('mains', 'deer meat', 15.00);

menu.addDishToCourse('desserts', 'pudding', 2.00);
menu.addDishToCourse('desserts', 'belgian fries', 3.55);
menu.addDishToCourse('desserts', 'jelly', 2.80);

console.log();

const meal = menu.generateRandomMeal();
console.log(meal);