# vehicle-simulation project

## Description

This is a vehicle simulation application. The user is  able to create, display, update, delete Scenario and Vehicle, a
scenario can have multiple vehicles, and vehicles should be able move when user click a button
based on the scenario and vehicles parameters.

## How to install and Run the project.

### `npm install`

to install all the dependencies for this app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Inside this project

### Components 

1- Scenerio <br />
2- Vehicle 
3- TableItem
4- VehicleTableItem
5- SideBar 
6- GridLines
7- Dailoge
8- NoScenerioAvailable

### Screens

1- HomeScreen - The user will be able to see the vehicles by selecting the scenerios. and when the user will click on the start button then will be able    to see the simulation in the below graph. 
2- AddScenerioScreen  - In this screen user can add the scenerios. 
3- AddVehicleScreen  - In the screen user can add vehicles.
4- AllSceneriosScreen - In this screen user will be able to see all the scenerios.

## what we used in this project

### hooks

`useState`
`useEffect`
`useContext`

### Custom hook

`useForm` in this hook we handeling all the form validation this hook contains all the logic of form validation it takes an object as an argument.
and the object can have properties one is `value` and second is `valide` valid is a function that can use to validate our value. and this hook returns the validate vales and the errors also.

### `react-router`

we have used `react-router` to make it SPA .
