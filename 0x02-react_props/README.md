#0x02. React props#
Creating basic React components using functions
##Task 0##
Create the basic components
##Task 1##
Write the tests for each component
##Task 2##
Create a notification component to support the generation of list. 
Every component should be tested. Create a new NotificationItem.test.js file, and add the following checks
- Verify that the basic rendering of the component works without crashing
- Verify that by passing dummy type and value props, it renders the correct html (for example: type=“default” and value=“test”)
- Verify that by passing a dummy html prop, it renders the correct html (for example: html={{ __html: '<u>test</u>' }})
Modify Notifications.js
- Import the new NotificationItem component in the Notifications.js file and replace the <li> tags with NotificationItem components.

Modify Notifications.test.js
- Modify the Notifications.test.js file to change one of the check:

- Instead of testing if the component renders li, check that the component renders NotificationItem elements
- Add a test to verify that the first NotificationItem element renders the right html (note: this is usually not the best way to write tests, but sometimes necessary when you don’t control the child component)
##Task 3##
Using the React extension in Chrome:

- Modify the type of the first NotificationItem to change from “default” to “urgent”. The first notification should change color to red, take a screenshot
- Profile the load of the application and note which Component is the longest to render after App, take a screenshot
##Task 4##
Create a CourseListRow component
- Create a new folder CourseList and a new component with the name CourseListRow. The component accepts three props:

isHeader (bool, default: false)
textFirstCell (string, required)
textSecondCell (string, default: null)
- The component returns a tr html element, and within that element:

if isHeader is true
if textSecondCell is null, it returns a th element containing textFirstCell with a colSpan = 2
if textSecondCell is not null, it returns two th elements containing textFirstCell and textSecondCell
if isHeader is false
it returns two td elements containing textFirstCell and textSecondCell
Create a CourseListRow.test.js file:

When isHeader is true
- Add a check to test the component renders one cell with colspan = 2 when textSecondCell does not exist
- Add a check to test the component renders two cells when textSecondCell is present
When isHeader is false
- Add a check to test the component renders correctly two td elements within a tr element
Create a CourseList component
- In the folder CourseList, create a new component named CourseList:

it returns a table element with an id CourseList
it contains a thead element
it includes a CourseListRow with the props textFirstCell="Available courses" and isHeader=true
it includes a CourseListRow with the props textFirstCell="Course name", textSecondCell="Credit", and isHeader=true
it contains a tbody element
it includes a CourseListRow with the props textFirstCell="ES6", textSecondCell="60", and isHeader=false
it includes a CourseListRow with the props textFirstCell="Webpack", textSecondCell="20", and isHeader=false
it includes a CourseListRow with the props textFirstCell="React", textSecondCell="40", and isHeader=false
Create and import a file CourseList.css where you will be able to add the styling for the component

Create a CourseList.test.js with two checks:

- Check that it renders CourseList component without crashing
- Check that it renders the 5 different rows
- Modify the App component
Modify the App component to display either the Login, or the CourseList component:

- Import Proptypes
- Create a property isLoggedIn. It should be false by default
- When isLoggedIn is false, display the Login screen
- When isLoggedIn is true, display the CourseList screen
Modify the App test suite:
- Add a test to check that CourseList is not displayed
- Describe a new case, when isLoggedIn is true, and add two checks. The first one should verify that the Login component is not included. The second one should verify that the CourseList component is included
Modify the NotificationItem component
Define the prop types for the NotificationItem component:

- Verify that html is an object with the key __html, and that the value is a string
- Require type to be a defined prop and a string. It should default to default if type is not passed by the parent component
- Verify that value is a string
Modify the Notifications component
Add a new div element with the class menuItem:

- it contains the text Your notifications
- it should be display right before div.Notifications
Add a prop to the Notifications component named displayDrawer:

- it should be a boolean
- by default it should be false
Modify the div.Notifications tag:

- it should only be visible when displayDrawer is true
Modify the Notifications.test.js:

- Add a check that the menu item is being displayed when displayDrawer is false
- Add a check that the div.Notifications is not being displayed when displayDrawer is false
- Add a check that the menu item is being displayed when displayDrawer is true
- Add a check that the div.Notifications is being displayed when displayDrawer is true
- Update the UI
- You can use the React extension in Chrome, to toggle the two booleans displayDrawer and isLoggedIn
##Task 5##
Create the courses array
Create a new Shape named CourseShape containing:

- id (number, required)
- name (string, required)
- credit (number, required)
Modify CourseList.js:

- Add a propType listCourses that will take an array of the shape you created
- Make sure that if listCourses is not passed by the parent component the propType defaults to an empty array
- When listCourses is empty, display a row showing No course available yet
- When listCourses contains at least one element, display a row for each element showing the name of the course and the number of credits
- Make sure to add a key to help React optimize rendering
Modify CourseListRow.js:

- Make sure the property textSecondCell can accept either a string or number
Modify the App.js to create a new array named listCourses. It should contains three elements:

- id: 1, name: ‘ES6’, credit: 60
- id: 2, name: ‘Webpack’, credit: 20
- id: 3, name: ‘React’, credit: 40
Add a listCourses property to the CourseList component in App

Create the notifications array
Inside the Notifications directory, create a new Shape named NotificationItemShape containing:

- an id (number, required)
- a html (object of { \_\_html: string })
- a type (string, required)
- a value (string)
Modify Notifications:
- Add a proptype listNotifications that will take an array of the shape you just created
- When listNotifications is empty, display a row showing No new notification for now
- When listNotifications contains at least one element, display a NotificationItem for each element of the array
Modify the App to create a new array named listNotifications. It should contains all the previous elements we used to have in Notifications elements. Add an id for each element.

Add the property listNotifications to the Notifications component in App

Update the tests
Modify Notifications.test.js:

- Add a new test to verify that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property
- Add a new test to verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem
- Add a new test to verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is
Modify CourseList.test.js:

- Add a new test to verify that CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property
- Add a new test to verify that when you pass a list of courses, the component renders it correctly
