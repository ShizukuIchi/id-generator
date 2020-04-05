function generateIdGenerator(id = 0) {
  return () => id++;
}
module.exports = generateIdGenerator;
