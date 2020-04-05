function generateIdGenerator(id = 0) {
  if (!Number.isInteger(id)) throw new Error("Must provide an integer.");
  return () => id++;
}
module.exports = generateIdGenerator;
