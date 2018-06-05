//load stringified database via function with a local storage key = "localStoragekey"
//function returns object instead of string because of JSON.parse
const loadDatabase = function (localStorageKey) {
    const databaseString = localStorage.getItem(localStorageKey)
    return JSON.parse(databaseString)

//re-creates variable "HomeInventoryDatabase" from the loaded data from local storage
    const HomeInventoryDatabase = loadDatabase("Home Inventory")

// Creates variable "myStuff_article" to later push created table to DOM
    const myStuff_article = document.querySelector("#myStuff")

//creates fragment variable which becomes container for creation of table
    const fragmentHomeInventory = document.createDocumentFragment()

//First "for - in" loop creates skeleton or foundation for table calling it inventoryTable and accesses data from HomeInventoryDatabase container.
//The "forEach" assigns a section element to each item in the created table.
//The second "for-in" loop assigns 3 paragraph keys to each of the created sections from the previous function. 
    for (let table in HomeInventoryDatabase) {
        const inventoryTable = HomeInventoryDatabase[table]
        inventoryTable.forEach(item => {
            const sectionElement = document.createElement("section")
            for (let key in item) {
                const paragraphElement = document.createElement("p")
                paragraphElement.textContent = `${key}: ${item[key]}`
                sectionElement.appendChild(paragraphElement)
            }
            //inserts created table in section element
            fragmentHomeInventory.appendChild(sectionElement)
        })
    }
}
//links the created table fragment in JS file to the HTML file after the created article variable
myStuff_article.appendChild(fragmentHomeInventory)
