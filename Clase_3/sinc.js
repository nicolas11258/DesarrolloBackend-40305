


function funcionA(){
    console.log(1);
    funcionB();
    console.log(2);
}

function funcionB(){
    console.log(3);
    funcionC();
    console.log(4);
}

function funcionC(){
    console.log(5);
}

funcionA()