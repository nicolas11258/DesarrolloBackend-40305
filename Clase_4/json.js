



const object = {
    name: 'John',
    age: 30,
    isMarried: false
  };
  
  const jsonString = JSON.stringify(object);
  console.log(jsonString);

  const object2 = JSON.parse(jsonString);

  console.log(object2.isMarried);


  