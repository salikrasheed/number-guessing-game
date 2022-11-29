#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let welcomeText = chalkAnimation.neon("Hey Everyone:  Welcome to Guess Number Game");
    await sleep();
    welcomeText.stop();
}
await welcome();
let number = [Math.floor(Math.random() * 100)];
async function askQuestions() {
    const answer = await inquirer
        .prompt([
        {
            type: "number",
            name: "gNum",
            message: "Enter Any Number Between 0 - 100:"
        },
    ]);
    if (answer.gNum == number) {
        console.log(`Great :) You Guessed Right, Your number is ${answer.gNum} `);
    }
    else if (answer.gNum < number) {
        console.log(`Your Number is too low : Try Again`);
    }
    else if (answer.gNum > number) {
        console.log(`Your Number is too High : Try Again`);
    }
}
async function startAgain() {
    do {
        await askQuestions();
        var again = await inquirer.
            prompt({
            type: "input",
            name: "restart",
            message: " Do you want to continue again? Press yes or no:"
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'yes' || again.restart == 'Yes');
}
startAgain();
