function generateIdGenerator(id = 0) {
  let _id = id;
  return () => {
    _id += 1;
    return _id;
  };
}
module.exports = generateIdGenerator;
