const students = [
    {id: 21, name: 'Jisan Mia'},
    {id: 31, name: 'Asiq'},
    {id: 41, name: 'Depjol'},
    {id: 70, name: "Shawon"}
];
// const ara = [];
// for(i=0;i<students.length;i++){
//     const element = students[i];
//     const property = element.name;
//     ara.push(property);
// }
// console.log(ara);

const names = students.map(s => s.name);
//console.log(names);

const ids = students.map(s => s.id);
// console.log(ids);

const bigger = students.filter(s => s.id>41);
const biggerOne = students.find(s => s.id>41);
console.log(biggerOne);