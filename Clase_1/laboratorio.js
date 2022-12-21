let people = [
    {id:1, first_name:'Luz', last_name: 'Escalante', age:25, gender:'F'},
    {id:2, first_name:'Luis', last_name: 'Guerra', age:18, gender:'M'},
    {id:3, first_name:'Carmen', last_name: 'Cadena', age:23, gender:'F'},
    {id:4, first_name:'David', last_name: 'Chachagua', age:30, gender:'M'}
];


function mostrarLista(parametro){
    if(parametro.length == 0){
        console.log('Oye la cadena esta vacia');
    }else{
        for (let index = 0; index < parametro.length; index++) {
            console.log(parametro[index]); 
        }
        console.log(parametro.length);
    }
}

mostrarLista(people);
