#learn2code

import time

def startUp():
    print("Hello. Type 'start' to start or 'quit' to terminate this program")

startUp()

command = input()

if command == "quit":
    pass

if command == "Quit":
    pass

if command == "QUIT":
    pass

def startProgram():
    print("Starting...")
    time.sleep(0.75)
    print("Welcome to learn2code! Today I am going to teach you how to code!")

if command == "start":
    startProgram()

if command == "Start":
    startProgram()

if command == "START":
    startProgram()

hello_world = "'print('Hello, World!')'"

print("First, we are going to learn how to write a simple line of code.")
time.sleep(0.75)
print("When this symbol (>>>) pops up, type " + hello_world + ", and press enter.")
input_1 = input(">>>")
if input_1 == "print('Hello, World!')":
    print("Hello, World!")
    time.sleep(0.75)
    print("Before we move on, we have to learn what this command does.")
    time.sleep(0.5)
    print("The 'print()' command displayes the text that is inside the parantheses (brackets). When writing this command, if you want to print words or writing, remember to put the talking marks ("") inside the parentheses and then write inside that. If you want to print a number, then you don't need to put the talking marks inside the parentheses.")
else:
    print("Uh Oh... looks like you did something wrong! Try checking over your spelling.")
    input_1 = input(">>>")

def adding_Intigers():
    print("Now that we have covered that, it's time to move on to something more complex.")
    print("Introducing...")
    time.sleep(0.9)
    print("Math in Python!")

adding_Intigers()

