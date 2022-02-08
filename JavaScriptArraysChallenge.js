// Using the for loop to match the age with 21 for once the condition is matched display a message 
for (let age = 0; age<21; age++) {
    console.log("Congratulations now you must be independent")
}


// Using the for loop to print out every odd number from 0 to 100 because we are using the increment command 
for (let i = 0; i<100; i++) {
    if (i % 2 !== 0) console.log(i);
}


// Using the for loop to print out every odd number from 100 to 0 because we are using the decrement command 
for (let i = 100; i>0; i--) {
    if (i % 2 !== 0) console.log(i);
}

// Using the for loop but this time using the break statement in order for the loop to stop doing what we tell the computer to do
for (let savings = 5; savings<1200; savings++){
    console.log(savings);
    if (savings === 1200) break;
}


// Using the for loop in order to go trough each element of the array "names" and everytime we are in a new index printing out the name of the given index 
const names = ['john', 'bob', 'mary', 'joe'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// we can do the same as the example above using a for of loop like this
const names = ['john', 'bob', 'mary', 'joe'];

for (i of names){
    console.log(i)
}

