const { create } = require("./index");

const data = [
  {
    id: 0,
    name: "Brian",
    age: 20,
  },
  {
    id: 1,
    name: "Michael",
    age: 30,
  },
  {
    id: 2,
    name: "Rodney",
    age: 25,
  },
  {
    id: 3,
    name: "Brian",
    age: 27,
  },
  {
    id: 4,
    name: "Brian",
    age: 23,
  },
];

/* FILTER METHODS */
const filterMethods = {
  includes: (item, filterValues) => filterValues.includes(item),
  range: (item, [min, max]) => item > min && item < max,
};

/* FILTER INSTANCE CREATION */
const filter = create(filterMethods);

/* FILTER */
const filters = [
  { method: "includes", path: ["name"], key: "NAME" },
  { method: "range", path: ["age"], key: "AGE" },
];

/* FILTER VALUES */
const filterValues = {
  NAME: ["Brian", "Rodney"],
  AGE: [24, 30],
};

const result = filter(data, filters, filterValues);

console.log("result", result);
