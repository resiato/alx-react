#0x06-React_Immutable#
## 0-fromjs.js ##
Create a function getImmutableObject that accepts object as a parameter and converts it into an immutable Map using fromJS of the Immutable.js library
## 1-map.js ##
Modify the function getImmutableObject in 0-fromjs.js using Map from Immutable.js
## 2-nested.js ##
Create a function accessImmutableObject that takes in a plain object and an array containing a list of a path to some key in the object. The function should return the value of the object at the defined path.
## 3-list.js ##
Create two functions:
- getListObject that accepts an array as parameter and converts it into an immutable List using the Immutable.js library
- addElementToList that accepts two arguments: first one is a List and second one is a string. Append the string to the list and return the list
## 4-mutations.js ##
Create & export a constant named map. It should create an Immutable Map with the following object:

 {
     1: 'Liam',
     2: 'Noah',
     3: 'Elijah',
     4: 'Oliver',
     5: 'Jacob',
     6: 'Lucas',
}
Export a second constant named map2. It should use the first map and modify the following values:

Modify the value for the index 2, to Benjamin
Modify the value for the index 4, to Oliver
Use only map and map2 variables. No other variables
## 5-merge.js ##
Create a function named concatElements
- It accepts two arguments page1 and page2. Both are arrays
- It should return a List containing the values of the two pages
Create a function named mergeElements
- It accepts two arguments page1 and page2. Both are objects
- It should return a List containing the values of the two pages
- If two values are the same, page2 values should be used.
Requirements:
- Use list and map from the Immutable.js library
## 6-deeply.js ##
Create a function named mergeDeeplyElements
- It should accept two arguments, page1 and page2. Both are objects
- It should return a List containing the values of the two pages
- If two values are the same, they should combine each other
## 7-equality.js ##
Create a function named areMapsEqual
- It accepts two arguments map1 and map2. Both are Immutable.js Maps
- It should return true if the Maps are equal
## 8-seq.js ##
Create a function named printBestStudents:
- It accepts one object as argument. The object is formed with the following structure:
const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  }
};
Calling the function should filter any student with a score < 70 and print to the console the first name and the last name with the first letter capitalized:
{
    "1": { score: 99, firstName: "Guillaume", lastName: "Salva" },
}
Requirements:
- Uses seq from immutable.js
