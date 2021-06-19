import sizeStandard from './sizeStandard';

class SizeCalculation {
  constructor(measurement) {
    this.sizeStandard = sizeStandard;
    this.measurement = measurement;
  }

  getSize() {
    console.log("getSize");
    console.log(this.measurement);

    return this.sizeStandard;
  }
}


export default SizeCalculation;