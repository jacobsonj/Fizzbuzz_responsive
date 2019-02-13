var fizzList = document.getElementById('fizzbuzz-list');

for(var i = 1; i <= 100; i++){
        addThing(i, fizzList);
}
    
function addThing(thing, list){
    var newThing = document.createElement('div');
    newThing.classList.add('box');
    if(i % 15 === 0){
        newThing.innerText = 'fizzbuzz';
        newThing.classList.add('fizzbuzz');
    }

    else if (i % 3 === 0){
        newThing.innerText = 'fizz';
        newThing.classList.add('fizz');
    }

    else if(i % 5 === 0){
        newThing.innerText = 'buzz';
        newThing.classList.add('buzz');
    }

    else{
        newThing.innerText = thing;
        newThing.classList.add('number');
    }

    list.appendChild(newThing)
}
