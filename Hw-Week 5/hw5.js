// Step 2.More map, filter and =>//

const numbers = [1, 2, 3, 4];
const newNumbers = numbers.map(i => i * 2);
console.log("The doubled numbers are", newNumbers);


const NewNumbers = numbers.filter(i => i % 2 !== 0);
console.log("filter an Odd numbers are", NewNumbers);



let monday = [
    {
        name: 'Write a summary HTML/CSS',
        duration: 180
    },
    {
        name: 'Some web development',
        duration: 120
    },
    {
        name: 'Fix homework for class10',
        duration: 20
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    }
];

let tuesday = [
    {
        name: 'Keep writing summary',
        duration: 240
    },
    {
        name: 'Some more web development',
        duration: 180
    },
    {
        name: 'Staring out the window',
        duration: 10
    },
    {
        name: 'Talk to a lot of people',
        duration: 200
    },
    {
        name: 'Look at application assignments new students',
        duration: 40
    }
];

let tasks = monday.concat(tuesday);
console.log(tasks);

tasks.map(task => task.name);


const myTasks = tasks.filter(tasks => tasks.duration);
// console.log(myTasks);

function timeConvert(n) {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
}
console.log(timeConvert(180));
console.log(timeConvert(120));
console.log(timeConvert(20));
console.log(timeConvert(200));
console.log(timeConvert(240));
console.log(timeConvert(180));
console.log(timeConvert(10));
console.log(timeConvert(200));
console.log(timeConvert(40));


let hours = ['180', '120', '20', '200', '240', '180', '10', '200', '40'];
const result = hours.filter(hour => hour.length > 2);
console.log(result);



let task_names = [];
for (let i = 0, max = tasks.length; i < max; i += 1) {
    task_names.push(tasks[i].name);
}
console.log(task_names);


const duration = [180, 120, 20, 200, 240, 180, 10, 200, 40];
const sum = duration.reduce(function (acc, currValue) {
    return acc + currValue;
});
console.log(sum);


const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {

    console.log(tasks, hourlyRate);
}

const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

console.log(` what Maartje should make per hour is ${'20€'}`);

