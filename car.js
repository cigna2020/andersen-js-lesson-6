class Car {

  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume;
  #isStarted;
  #mileage = 0;

  constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume,
    fuelConsumption, currentFuelVolume = 0, isStarted = false) {
    this.#brand = brand;
    this.#model = model;
    this.#yearOfManufacturing = yearOfManufacturing;
    this.#maxSpeed = maxSpeed;
    this.#maxFuelVolume = maxFuelVolume;
    this.#fuelConsumption = fuelConsumption;
    this.#currentFuelVolume = currentFuelVolume;
    this.#isStarted = isStarted;

    if (typeof (brand) !== 'string' || brand.length > 50 || brand.length <= 0) {
      throw new Error(`"${brand}" - это не автомобильный бренд. Введите, пожалуйста, строку с количеством символов от 1 до 50 включительно.`);
    }

    if (typeof (model) !== 'string' || model.length > 50 || model.length <= 0) {
      throw new Error(`"${model}" - это не модель автомобиля. Введите, пожалуйста, строку с количеством символов от 1 до 50 включительно.`);
    }

    if (typeof (yearOfManufacturing) !== 'number' || Object.is(yearOfManufacturing, NaN) || yearOfManufacturing < 1900 || yearOfManufacturing > new Date().getFullYear()) {
      throw new Error(`"${yearOfManufacturing}" - не может быть годом производства автомобиля. Введите, пожалуйста, число от 1900 до ${new Date().getFullYear()} включительно.`);
    }

    if (typeof (maxSpeed) !== 'number' || Object.is(maxSpeed, NaN) || maxSpeed < 100 || maxSpeed > 300) {
      throw new Error(`"${maxSpeed}" - и это максимальная скорость? Введите, пожалуйста, число от 100 до 300.`);
    }

    if (typeof (maxFuelVolume) !== 'number' || Object.is(maxFuelVolume, NaN) || maxFuelVolume < 5 || maxFuelVolume > 20) {
      throw new Error(`"${maxFuelVolume}" - не может быть использовано в качестве топлива. Введите, пожалуйста, число от 5 до 20.`);
    }

    if (typeof (fuelConsumption) !== 'number' || Object.is(fuelConsumption, NaN) || fuelConsumption <= 0) {
      throw new Error(`"${fuelConsumption}" - не может быть использовано в качестве количества топлива.`);
    }

    if (typeof (currentFuelVolume) !== 'number' || Object.is(currentFuelVolume, NaN) || currentFuelVolume <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    }

    if (this.currentFuelVolume > this.maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }
  }

  static SPEED_VALUE = ' км/ч';
  static FUEL_VALUE = ' л.';
  static FUEL_CONSUMPTION_VALUE = ' л/100км';
  static DISTANCE_VALUE = ' км.';

  set brand(value) {
    if (typeof (value) === 'string' && value.length <= 50 && value.length > 0) {
      this.#brand = value;
    } else {
      throw new Error(`"${value}" - это не автомобильный бренд. Введите, пожалуйста, строку с количеством символов от 1 до 50 включительно.`);
    }
  }

  get brand() {
    return this.#brand
  }

  set model(value) {
    if (typeof (value) === 'string' && value.length <= 50 && value.length > 0) {
      this.#model = value;
    } else {
      throw new Error(`"${value}" - это не модель автомобиля. Введите, пожалуйста, строку с количеством символов от 1 до 50 включительно.`);
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
      throw new Error(`"${value}" - не может быть годом производства автомобиля. Введите, пожалуйста, число от 1900 до ${currentYear} включительно.`);
    }
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set maxSpeed(value) {
    if (typeof (value) === 'number' && !Object.is(value, NaN) && value >= 100 && value <= 300) {
      this.#maxSpeed = value;
    } else {
      throw new Error(`"${value}" - и это максимальная скорость? Введите, пожалуйста, число от 100 до 300.`);
    }
  }

  get maxSpeed() {
    return this.#maxSpeed + Car.SPEED_VALUE;
  }

  set maxFuelVolume(value) {
    if (typeof (value) === 'number' && !Object.is(value, NaN) && value >= 5 && value <= 20) {
      this.#maxFuelVolume = value;
    } else {
      throw new Error(`"${value}" - не может быть использовано в качестве топлива. Введите, пожалуйста, число от 5 до 20.`);
    }
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume + Car.FUEL_VALUE;
  }

  set fuelConsumption(value) {
    if (typeof (value) === 'number' && !Object.is(value, NaN) && value > 0) {
      this.#fuelConsumption = value;
    } else {
      throw new Error(`"${value}" - не может быть использовано в качестве количества топлива.`);
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
      throw new Error('Неверное количество топлива для заправки');
    }
    if (this.#currentFuelVolume + value > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    } else {
      this.#currentFuelVolume += value;
    }
  }

  drive(speed, time) {
    if (typeof (speed) !== 'number' || Object.is(speed, NaN) || speed <= 0) {
      throw new Error('Неверная скорость');
    }
    if (typeof (time) !== 'number' || Object.is(time, NaN) || time <= 0) {
      throw new Error('Неверное количество часов');
    }
    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }
    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }
    if (!this.#fuelConsumption) {
      throw new Error('Укажите fuelConsumption. Недостаточно данных для расчета!');
    }
    if (this.#currentFuelVolume < ((this.#fuelConsumption / 100) * (speed * time))) {
      throw new Error('Недостаточно топлива');
    } else {
      this.#mileage += (speed * time);
      this.#currentFuelVolume -= (speed * time) * (this.#fuelConsumption / 100);
    }
  }
};

module.exports = Car;