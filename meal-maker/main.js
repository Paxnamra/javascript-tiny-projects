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

