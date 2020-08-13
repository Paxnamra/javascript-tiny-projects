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
  }
}

console.log(menu.appetizers);
console.log(menu.courses);
console.log(menu._courses.courses);
