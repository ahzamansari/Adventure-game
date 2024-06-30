import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\n\tWelcome To Ahzam - Adventure Game\n"));
class Player1 {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrese() {
        let fuel = this.fuel - 25;
        this.fuel =
            fuel;
    }
    fuelincrease() {
        this.fuel = 100;
    }
}
class Oppenent1 {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fueldecrese() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Please Enter your Name"
    }
]);
let oppenent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select your opponent",
        choices: ["Skeleton", "Zombie", "Alien"]
    }
]);
let p1 = new Player1(player.name);
let o1 = new Oppenent1(oppenent.select);
do {
    //Skeleton
    if (oppenent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for Your life..."],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red("You lose, best luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green("Congratulation, You Won"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == "Drink Portion") {
            p1.fuelincrease();
            console.log(chalk.green(`You Drink health portion you fuel is ${p1.fuel}`));
        }
        ;
        if (ask.opt == "Run for Your life...") {
            console.log(chalk.red("You lose, best luck next time"));
            process.exit();
        }
    }
    ;
    //Zombie
    if (oppenent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for Your life..."],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red("You lose, best luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green("Congratulation, You Won"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == "Drink Portion") {
            p1.fuelincrease();
            console.log(chalk.green(`You Drink health portion you fuel is ${p1.fuel}`));
        }
        ;
        if (ask.opt == "Run for Your life...") {
            console.log(chalk.red("You lose, best luck next time"));
            process.exit();
        }
    }
    ;
    //Alien
    if (oppenent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run for Your life..."],
            }
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fueldecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red("You lose, best luck next time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fueldecrese();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (o1.fuel <= 0) {
                    console.log(chalk.green("Congratulation, You Won"));
                    process.exit();
                }
            }
        }
        ;
        if (ask.opt == "Drink Portion") {
            p1.fuelincrease();
            console.log(chalk.green(`You Drink health portion you fuel is ${p1.fuel}`));
        }
        ;
        if (ask.opt == "Run for Your life...") {
            console.log(chalk.red("You lose, best luck next time"));
            process.exit();
        }
    }
    ;
} while (true);
{
}
