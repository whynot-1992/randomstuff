#passwordGenerator
import random

print("Password generator")
print()
print("Your password is...")

def generatePassword():
  wordList = "helloWorld", "iLoveCoding", "monkeyLover", "brainrotPerson", "godGamer"
  numList = "984", "690", "420", "314", "469", "908"
  generatedPassword = wordList[random.randint(0, 4)] + numList[random.randint(0, 5)]
  return generatedPassword

generatedPassword()
