class Media {
    constructor(param) {
      this._title = param;
      this._isCheckedOut = false;
      this._ratings = [];
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get ratings() {
      return this._ratings;
    }
  
    set isCheckedOut(checkedOut) {
      this._isCheckedOut = checkedOut;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut;
    }
  
    addRating(input) {
      this.ratings.push(input);
    }
  
    getAverageRating() {
      const reducer = (a, b) => a + b;
      const arrValue = this._ratings.length
      return (this.ratings.reduce(reducer)) / arrValue;
    }
  }