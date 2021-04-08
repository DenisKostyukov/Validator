class RangeValidator {
  /**
   * 
   * @param {number} from 
   * @param {number} to 
   */
  constructor(from, to) {
    this.from = from;
    this.to = to;
  };

  set from(newFrom) {
    if (typeof newFrom !== "number") {
      throw new TypeError("Wrong type");
    };
    this._from = newFrom;
  };

  set to(newTo) {
    if (typeof newTo !== "number") {
      throw new TypeError("Wrong type");
    };
    this._to = newTo;
  };

  get from() {
    return this._from;
  };

  get to() {
    return this._to;
  };

  get range() {
    return [this._from, this._to];
  };

  validate = (number) => {
    if (typeof number !== "number") {
      throw new TypeError("Wrong type")
    }
    if (number >= this._from && number <= this._to) return number;
    else throw new RangeError("Number is out of range");
  };
};
const validator = new RangeValidator(12, 50);