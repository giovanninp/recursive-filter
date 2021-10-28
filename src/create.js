const getPath = require("./getPath");

module.exports = (filterMethods = {}) => {
  const recursiveFilter = (list = [], filters = [], filterValues = {}) => {
    const [filter, ...nextFilters] = filters;
    if (filter) {
      const { method = "", path = [], key } = filter;
      const { [key]: filterValue = null, ...nextValues } = filterValues;
      return recursiveFilter(
        list.filter((item) =>
          filterValue
            ? filterMethods[method](getPath(item, path), filterValues[key])
            : true
        ),
        nextFilters,
        nextValues
      );
    }
    return list;
  };

  return recursiveFilter;
};
