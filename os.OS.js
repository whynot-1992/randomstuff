//os.OS.js

const accounts = [];
const passwords = [];
const apps = [
    "Guess the number",
    "Boogle",
    "Settings"
];

function startUp() {
    console.log("Welcome to os.OS. What would you like to do?");
    console.log("Terminate this program or create an account?");
    const choice1 = prompt("What would you like to do?");

    if (choice1.toLowerCase() === "terminate this program") {
        console.log("Shutting down...");
        console.log("Shutdown process complete.");
    } else if (choice1.toLowerCase() === "create an account") {
        createAccount();
    }
}

function createAccount() {
    const name = prompt("What is your name?");
    const password = prompt("Create a password.");

    accounts.push(name);
    passwords.push(password);

    console.log("Congrats. You have created your account. Now you are ready to proceed.");
    mainMenu(name);
}

function mainMenu(name) {
    console.log(`What do you want to do now, ${name}?`);
    console.log("Type 'help' for a list of commands.");
    console.log(`What are you going to do now, ${name}?`);
    const command = prompt(`>>>`).toLowerCase();

    switch (command) {
        case "help":
            console.log("Commands:");
            console.log("endProgram");
            console.log("accounts");
            console.log("versions");
            console.log("passwords");
            console.log("newAccount");
            console.log("More commands comming soon.");
            break;
        case "endprogram":
            console.log("Shutting down...");
            console.log("Shutdown process complete.");
        case "accounts":
            console.log("Here are your active accounts:");
            console.log(accounts);
            break;
        case "version":
            console.log("Version 1.1.2");
            break;
        case "passwords":
            console.log("Here are all your saved passwords:");
            console.log(passwords);
            break;
        case "newAccount":
            console.log("loading...");
            createAccount();
            break;
        default:
            console.log("Invalid command. Please try again.");
    }
    if (command !== "endprogram") {
        mainMenu(name);
    }
}

startUp();
