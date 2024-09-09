const account = []
const password = []

function startUp() {
    console.log("Welcome to os.OS. What would you like to do?");
    console.log("Terminate this program or create an account?");
    var choice1 = prompt("What would you like to do?");
    if (choice1 === "terminate this program") {
        console.log("Shutting down...");
        console.log("Shutdown process complete.");
    }
    if (choice1 === "create an account") {
        function createAcoount() {
            var name = prompt("What is your name?");
            console.log(+ typeof name, "is your name");
            var passwordChoice = prompt("Create a password.");
            console.log(+ typeof passwordChoice, "is your password.");
            console.log("Congrats. You have created your account. Now you are ready to proceed.");
            account.push(name)
            password.push(passwordChoice)
            function mainMenu() {
                var nameNew = name
                console.log("What do you want to do now, " + typeof nameNew, "?");
                console.log("Type 'Help', for a list of commands.");
                var command = prompt("What are you going to do now, " + typeof nameNew, "?");
                if (command === "help" || command === "Help") {
                    console.log("Commands:");
                    console.log("endProgram()");
                    console.log("accounts()");
                    console.log("versions()");
                    console.log("passwords()");
                    console.log("newAccount()");
                    console.log("changeAccount()");
                    console.log("More commands comming soon.");
                    var command = prompt("What are you going to do now, " + typeof nameNew, "?");
                }
                if (command === "endProgram()") {
                    console.log("Shutting down...");
                    console.log("Shut down process complete.");
                }
                if (command === "accounts()") {
                    return account
                    var command = prompt(newFunction());
                }

                function newFunction() {
                    return "What would you like to do, " + typeof name;
                }
                if (command === "versions()") {
                    console.log("Ver: 0.01");
                    var command = prompt("What are you going to do now, " + typeof name, "?");
                }
                if (command === "passwords()") {
                    return password
                    var command = prompt(newFunction1())
                }

                function newFunction1() {
                    return "What are you going to do now" + typeof name;
                }
                if (command === "newAccount()") {
                    var name = prompt("What is your name?");
                    console.log( + typeof name, "is your name.");
                    var passwordChoice = prompt("Create a password.");
                    console.log( + typeof passwordChoice, "is your password.");
                    account.push(name)
                    password.push(passwordChoice)
                    var command = prompt("What would you like to do, " + typeof name, "?");
                }
                if (command === "changeAccount()") {
                    console.log("Which account would you like to switch to?");
                    return account
                    var chooseAccount = prompt("Choose which account you would like to switch to.");
                    console.log("Welcome back, " + typeof chooseAccount, ".");
                    name.splice(1)
                    name.Push(chooseAccount)
                    var command = prompt("What would you like to do, " + typeof chooseAccount, "?");
                }
            }
        }
    }
}
