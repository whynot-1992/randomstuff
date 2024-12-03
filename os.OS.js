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
    const command = prompt(`What are you going to do now, ${name}?`).toLowerCase();

    switch (command) {
        case "help":
            break;
        case "endprogram":
            console.log("Shutting down...");
            console.log("Shutdown process complete.");
            break;
        case "accounts":
            console.log(accounts);
            break;
        default:
            console.log("Invalid command. Please try again.");
    }
    if (command !== "endprogram") {
        mainMenu(name);
    }
}

startUp();
