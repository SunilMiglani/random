class Company{
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }
}

const allCompany = [
  new Company('a', '#E74C3C'),
  new Company('b', '#9B59B6'),
  new Company('c', '#5DADE2'),
  new Company('d', '#48C9B0'),
  new Company('e', '#F4D03F'),
  new Company('f', '#D7DBDD'),
];

exports.getRandomCompany = () => {
  return allCompany[Math.floor(Math.random() * allCompany.length)];
}

exports.allCompany = allCompany;