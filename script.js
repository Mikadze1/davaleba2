// #1

for (let i = 5; i <= 100; i++){
    console.log(i)
}


// #2

let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let item of array1){
    if(item > 0 && item < 10){
        console.log(item)
    }
}


// #3

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let item of array2){
    console.log(item);
    if(item == 5){
        console.log('არის');
        break;
    }
}

// #4
// #5

// #6

let array5 = [1, 2, 3, 7, 6, 9];

for (let item of array5){
    if(item == 7){
        continue
    }
    console.log(item)
}


// #7


let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,  
    studentstatus: "active"
  };

  

console.log(user.studentstatus)



// #8


let user2 = {
    name: 'anna',
    age:  20,
    studentstatus: 'active'
}

if (user2.age < 18 && user2.studentstatus === 'active'){
    console.log('hello user')
}else if (user2.name === 'levani'){
    console.log('hello levani')
}else if (user2.studentstatus === 'active' || user2.age < 25){
    console.log('hello anna')
}else {
    console.log('error')
}



// #9

let array6 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];

for (let item of array6){
    if (item % 2 == 0){
        console.log(item)
    }
}


// #10

let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

for (let i = 0; i < users.length; i++){
    if (users[i].status === true){
        console.log(users[i]);
    }
}
