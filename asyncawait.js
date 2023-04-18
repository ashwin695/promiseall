console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

const promiseWifeBringingTicks = new Promise((resolve, reject) => { setTimeout(() => resolve('ticket'), 3000);

});

const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

let ticket = await promiseWifeBringingTicks;
    console.log("wife: i have the tics")
    console.log("husband: we should go in")
    console.log("wife: no ia m hungry")

    let popcorn = await getPopcorn()
return ticket;

}

preMovie().then((m) => console.log(m));

console.log('person4: shows ticket');

console.log('person5: shows ticket');