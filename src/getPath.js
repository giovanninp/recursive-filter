module.exports = (item = {}, path = []) =>
  path.reduce((prev, path) => prev[path], item);
