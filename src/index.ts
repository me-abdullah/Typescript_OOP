abstract class Vehicle {
    make: string;
    model: string;
    year: number;
    rented: boolean;
  
    constructor(make: string, model: string, year: number, rented: boolean) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.rented = rented;
    }
  
    getMake(): string {
      return this.make;
    }
  
    getModel(): string {
      return this.model;
    }
  
    getYear(): number {
      return this.year;
    }
  
    getRented(): boolean {
      return this.rented;
    }
  
    setRented(rented: boolean): void {
      this.rented = rented;
    }
  
    abstract rentalRate(): number;
  
    rent(): string {
      if (this.rented) {
        return `This ${this.make} ${this.model} is already rented.`;
      }
      else {
        this.rented = true;
        return `You have rented a ${this.make} ${this.model}.`;
      }
    }
  
    returnVehicle(): string {
      if (this.rented) {
        this.rented = false;
        return `Thank you for returning the ${this.make} ${this.model}.`;
      } else {
        return `This ${this.make} ${this.model} has not been rented yet.`;
      }
    }
  }
  
  class Car extends Vehicle {
    passengers: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, passengers: number) {
      super(make, model, year, rented);
      this.passengers = passengers;
    }
  
    rentalRate(): number {
      return 50; 
    }
  
    getPassengers(): number {
      return this.passengers;
    }
  }
  
  class Truck extends Vehicle {
    capacity: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, capacity: number) {
      super(make, model, year, rented);
      this.capacity = capacity;
    }
  
    rentalRate(): number {
      return 100;
    }
  
    getCapacity(): number {
      return this.capacity;
    }
  }
  
  class Motorcycle extends Vehicle {
    engineSize: number;
  
    constructor(make: string, model: string, year: number, rented: boolean, engineSize: number) {
      super(make, model, year, rented);
      this.engineSize = engineSize;
    }
  
    rentalRate(): number {
      return 30;
    }
  
    getEngineSize(): number {
      return this.engineSize;
    }
  }
  
  
  const car = new Car('Toyota', 'Corolla', 2019, false, 5);
  console.log(car.rent());
  console.log(car.returnVehicle());
  
  const truck = new Truck('Ford', 'F-150', 2021, false, 2000);
  console.log(truck.rent()); 
  console.log(truck.returnVehicle()); 
  
  const motorcycle = new Motorcycle('Honda', 'China', 2020, false, 600);
  console.log(motorcycle.rent()); 
  console.log(motorcycle.returnVehicle()); 
  