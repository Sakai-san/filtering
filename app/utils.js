const _ = require('../node_modules/lodash');


/**
 * vector norm
 *
 * @desc    compute the norm of vector with n components
 * @param   {Array<Number>}     vector
 * @returns {null|Number}
 */

 const vectorNorm = ( vector ) => {
   if ( !vector || !_.isArray(vector) ){
     return null;
   }
  const squareSum = vector
    .map( (component) => component*component)
    .reduce( (memo, square) => memo+square, 0 );
  return Math.sqrt(squareSum);
}

/**
 * dot product
 *
 * @desc    compute the dot product of two vectors both with n components
 * @param   {Array<Number>}     a       - vector a
 * @param   {Array<Number>}     a       - vector b
 * @returns {null|Number}
 */

const dotProduct = ( a, b ) => {
  if ( !a || !b || !_.isArray(a) || !_.isArray(b) || a.length !== b.length){
    return null;
  }
  const size  = a.length;
  let i       = 0;
  let acc     = 0;
  for( i; i < size; i++){
    acc = acc + a[i]*b[i];
  }
  return acc;
}

const Candidate =  function(name, birthDate) {
  this.name = name,
  this.birthDate = birthDate,
  this.getAge = () => {
    const dateDiff = new Date( Date.now() - new Date(this.birthDate) );
    return Math.abs(dateDiff.getUTCFullYear() - 1970);
  }
};


const Job =  function(startDate, endDate, jobDescription, company) {
  this.startDate = startDate,
  this.birthDate = endDate,
  this.getDuration = () => {
    const dateDiff = new Date( Date.now() - new Date(this.birthDate) );
    return Math.abs(dateDiff.getUTCFullYear() - 1970);
  }
};


// test candidate
const candidate1 = new Candidate( "sebastian", "1980-10-12" );

console.log( candidate1.getAge() );


const Experiences =  ( (jobs) => {
  return jobs;
});


module.exports = {
  vectorNorm,
  dotProduct
}
