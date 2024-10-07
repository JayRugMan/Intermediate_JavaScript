class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    if (['primary', 'middle', 'high'].includes(level)) {
      this._level = level;
    } else {
      console.log('level must be "primary", "middle" or "high"')
    };
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const picker = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[picker];
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents === 'number') {
      this._numberOfStudents = newNumberOfStudents;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
}


class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}


class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams
  }

  sportsTeams() {
    console.log('Sports teams:');
    this._sportsTeams.forEach(team => {console.log(`   ${team}`)});
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.quickFacts();
alSmith.sportsTeams();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));