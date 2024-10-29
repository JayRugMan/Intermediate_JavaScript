const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

/* EXAMPLE:
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
*/

const myExecutor = (resolve, reject) => {
  if (inventory['sunglasses'] > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
};

// Write promise code below
const orderSunglasses = () => {return new Promise(myExecutor)};
const orderPromise = orderSunglasses();

console.log(orderPromise);