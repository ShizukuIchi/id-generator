function generateIdGenerator(id = 0) {
  let _id = id;
  return function () {
    return _id++;
  };
}
module.exports = generateIdGenerator;
