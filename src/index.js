function generateIdGenerator(id = 0) {
  let _id = id;
  return () => {
    return _id++;
  };
}
module.exports = generateIdGenerator;
