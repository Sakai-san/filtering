const utils = require('./utils');
const data = require( '../data.json');


const allProfiles = [
  {
    name: "michelle",
    scalars : {
      age: 90,
      expectedSalary: 60000,
      gender: 0,
    }
  },
  {
    name: "dimitri",
    scalars : {
      age: 22,
      expectedSalary: 240000,
      gender: 1,
    }
  },
  {
    name: "thomas",
    scalars : {
      age: 38,
      expectedSalary: 200000,
      gender: 1,
    }
  },
];

const wishedProfile = {
  scalars: {
    age: 24,
    expectedSalary: 120000,
    gender: 0,
  }
};

console.log( utils.profilesComparison(wishedProfile, allProfiles ) );

console.log(
  'toma current job',
  data[1].jobExperiences[0].JobDescription
)
