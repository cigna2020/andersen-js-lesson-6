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
  static FUEL_VALUE = ' л.';
  static FUEL_CONSUMPTION_VALUE = ' л/100км';
  static DISTANCE_VALUE = ' км.';

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

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(value) {
    if (typeof (value) === 'number' && !Object.is(value, NaN) && value >= 100 && value < 300) {
      this.#maxSpeed = value;
    } else {
      throw new Error(`"${value}" - и это максимальная скорость? Введите, пожалуйста, число от 100 до 300, но не включая 300 (в задании слово «включительно» отсутствует))).`)
    }
  }

  get maxSpeed() {
    return this.#maxSpeed + Car.SPEED_VALUE;
  }

  set maxFuelVolume(value) {
    if (typeof (value) === 'number' && !Object.is(value, NaN) && value >= 5 && value < 20) {
      this.#maxFuelVolume = value;
    } else {
      throw new Error(`"${value}" - не может быть использовано в качестве топлива. Введите, пожалуйста, число от 5 до 20, но не включая 20 (в задании слово «включительно» отсутствует))).`)
    }
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume + Car.FUEL_VALUE;
  }

  set fuelConsumption(value) {
    if (typeof (value) === 'number' && !Object.is(value, NaN) && value >= 0) {
      this.#fuelConsumption = value;
    } else {
      throw new Error(`"${value}" - не может быть использовано в качестве топлива. Введите, пожалуйста, число от 5 до 20, но не включая 20 (в задании слово «включительно» отсутствует))).`)
    }
  }

  get fuelConsumption() {
    return this.#fuelConsumption + Car.FUEL_CONSUMPTION_VALUE;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume + Car.FUEL_VALUE;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage + Car.DISTANCE_VALUE;
  }

  start() {
    if (!this.#isStarted) {
      this.#isStarted = true;
    } else {
      throw new Error('Машина уже заведена');
    }
  }

  shutDownEngine() {
    if (this.#isStarted) {
      this.#isStarted = false;
    } else {
      throw new Error('Машина ещё не заведена');
    }
  }

  fillUpGasTank(value) {
    if (typeof (value) !== 'number' || Object.is(value, NaN) || value <= 0) {
      throw new Error('Неверное количество топлива для заправки')
    }
    if (this.#currentFuelVolume + value > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен')
    } else {
      this.#currentFuelVolume += value;
    }
  }
};
