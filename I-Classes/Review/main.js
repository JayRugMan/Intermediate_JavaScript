class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }

  static generatePassword() {
    return Math.floor(Math.random()*10000);
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications;
  }
  
  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }
}

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  }

  get insurance() {
    //return this._insurance;
    console.log(`Insurance covered by ${this._name}: `);
    for (let ins of this._insurance) {
      console.log(` - ${ins}`)
    }
  }

  addInsurance(newInsurance) {
    this._insurance.push(newInsurance)
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

const docOck = new Doctor("Otto Octavius", ['Sinister Six HMO Plus', '8-leg Exterminators PPO/plus'])
docOck.takeVacationDays(14);
console.log(docOck.remainingVacationDays);
docOck.addInsurance('Osborn Corp HSA Plans');
docOck.insurance