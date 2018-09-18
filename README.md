### DOM Component Creation Challenge
Now it's time to create a brand new project for displaying your home database in the DOM.
```
cd
cd workspace
mkdir database-dom && cd $_
touch index.html
touch database.js
code .
```

- Create the HTML boilerplate with the ! shortcut in Visual Studio Code.

- Create one, base HTML <article> component inside the body tag. Give it an id value of myStuff.

- In your JavaScript file, load your home inventory from local storage.
  - Iterate over every data set in the database and create a <section> component.

- That component itself should contain three <p> components. One for the name, location, and description.

- Attach the p components as children of the section.

- Attach the section as a child of the article.

### ADVANCED CHALLENGE 
Write a function that performs the operation of creating your DOM components

Define an argument to the function that will filter the data to one of the data sets. For example, if I pass a string value of "crafts" to the function, only items in the crafts table in the database should appear.

### Run Program
1. Run code from [this](https://github.com/millerac333/home-inventory-db-DOM) Repo before running this program.
2. open in code editor
3. launch in browser 
