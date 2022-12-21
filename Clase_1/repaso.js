let people = [
    {id:1, first_name:'Luz', last_name: 'Escalante', age:25, gender:'F'},
    {id:2, first_name:'Luis', last_name: 'Guerra', age:18, gender:'M'},
    {id:3, first_name:'Carmen', last_name: 'Cadena', age:23, gender:'F'},
    {id:4, first_name:'David', last_name: 'Chachagua', age:30, gender:'M'}
];

let person = people.find(p=>{
    let test;
    test = p.id===3;
    return test;
})

console.log(person);