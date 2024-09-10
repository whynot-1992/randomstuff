#passwordGenerator
import random

print("Password generator")
print()
print("Your password is...")
print()

def generatePassword():
  wordList = ["helloWorld", "iLoveCoding", "monkeyLover", "brainrotPerson", "godGamer"]
  numList = ["984", "690", "420", "314", "469", "908", "911"]
  wordIndex = random.randint(0, 4)
  numIndex = random.randint(0, 6)
  generatedPassword = wordList[wordIndex] + numList[numIndex]
  print(generatedPassword)

generatePassword()
