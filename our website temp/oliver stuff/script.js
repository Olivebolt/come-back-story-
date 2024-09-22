// Step 1: Select the parent element
const parentElement = document.querySelector('#parent'); // Selects the element with ID 'parent'

// Step 2: Create the new child element
const newChild = document.createElement('div'); // Creates a new <div> element

// Step 3: Set attributes or content for the new child element
newChild.textContent = 'This is a new child element'; // Sets the text content of the new <div>

// Step 4: Append the new child element to the parent element
parentElement.appendChild(newChild); // Appends the new <div> as the last child of the parent element
