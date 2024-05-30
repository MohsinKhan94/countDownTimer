import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the amount of seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "please enter a valid number";
        }
        else if (input > 60) {
            return "please enter a number less than or equal to 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
function startTime(val) {
    const endTime = new Date().getTime() + val * 1000;
    const interval = setInterval(() => {
        const currentTime = new Date().getTime();
        const timeDiff = endTime - currentTime;
        if (timeDiff <= 0) {
            console.log("Time's up!");
            clearInterval(interval);
            process.exit();
        }
        else {
            const min = Math.floor((timeDiff / 1000) / 60);
            const sec = Math.floor((timeDiff / 1000) % 60);
            console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
        }
    }, 1000);
}
startTime(input);
