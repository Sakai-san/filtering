const utils = require('./utils');
const data = require( '../data.json');


const allProfiles = [
  {
    name: "michelle",
    scalars : {
      age: 90,
      react: 2,
      frontend: 0,
      gender: 1,
    }
  },
  {
    name: "dimitri",
    scalars : {
      age: 22,
      react: 0,
      frontend: 3,
      gender: 1,
    }
  },
  {
    name: "dimitra",
    scalars : {
      age: 22,
      react: 0,
      frontend: 3,
      gender: 0
    }
  },
  {
    name: "thomas",
    scalars : {
      age: 38,
      react: 0.5,
      frontend: 0,
      gender: 1,
    }
  },
];

const wishedProfile = {
  scalars: {
    age: 24,
    react: 1,
    frontend: 3,
    gender: 0
  }
};

console.log( utils.profilesComparison(wishedProfile, allProfiles ) );

console.log(
  'toma current job',
  data[1].jobExperiences[0].JobDescription
)
