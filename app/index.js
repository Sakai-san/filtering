const utils = require('./utils');
const data = require( '../data.json');

const triplets =  [
  [3, 4, 5],
  [5, 12, 13],
  [8, 15, 17],
  [7, 24, 25],
  [20, 21, 29],
  [12, 35, 37],
  [9, 40, 41],
  [28, 45, 53],
  [11, 60, 61],
  [16, 63, 65],
  [33, 56, 65],
  [48, 55, 73],
  [13, 84, 85],
  [36, 77, 85],
  [39, 80, 89],
  [65, 72, 97],
];


triplets.forEach ( (triplet) => {
  console.log("solution : " +triplet[2]);
  console.log( utils.vectorNorm(triplet.slice(2) ));
  console.log("_______________________");
});

console.log( "angle 180° ", utils.radianToDegree(utils.angle( [8, 0], [-8 , 0 ]) ));
console.log( "angle 90° ", utils.radianToDegree(utils.angle( [1, 0], [0 , 1]) ));
console.log( "angle 45° ", utils.radianToDegree( utils.angle( [2, 2], [5 , 0]) ));
console.log( "angle 315° ", utils.radianToDegree( utils.angle( [5, 0], [2 , -2] ) ));

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
