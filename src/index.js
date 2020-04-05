function generateIdGenerator(_id = 0) {
  return () => _id++;
}
module.exports = generateIdGenerator;
