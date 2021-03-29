class Car {

  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  static SPEED_VALUE = ' км/ч';

  set brand(value) {
    if (typeof (value) === 'string' && value.length <= 50 && value.length > 0) {
      this.#brand = value;
    } else {
      throw new Error(`"${value}" - это не автомобильный бренд. Введите, пожалуйста, строку с количеством символов от 1 до 50 включительно.`)
    }
  }

  get brand() {
    return this.#brand
  }

  set model(value) {
    if (typeof (value) === 'string' && value.length <= 50 && value.length > 0) {
      this.#model = value;
    } else {
      throw new Error(`"${value}" - это не модель автомобиля. Введите, пожалуйста, строку с количеством символов от 1 до 50 включительно.`)
    }
  }

  get model() {
    return this.#model
  }
  set yearOfManufacturing(value) {
    const currentYear = new Date().getFullYear();
    if (typeof (value) === 'number' && !Object.is(value, NaN) && value >= 1900 && value <= currentYear) {
      this.#yearOfManufacturing = value;
    } else {
      throw new Error(`"${value}" - не может быть годом производства автомобиля. Введите, пожалуйста, число от 1900 до ${currentYear} включительно.`)
    }
  }

}
