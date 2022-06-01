#0x03. React component#
##Task 0##
Convert an App function into a React class
##Task 1##
### Add lifecycle to a component###
In the App Class:

Add a props named logOut with the props type being function
- The default value for this property, should be an empty function
- Add an event listener when the component is mounted to listen to when the user is pressing down the keyboard keys
- When the user is pressing down the control and the h keys simultaneously, display the alert Logging you out and call the function logOut

In test file for the App Class:

- Create a test to verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out
