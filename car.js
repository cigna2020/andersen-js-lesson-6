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
}
