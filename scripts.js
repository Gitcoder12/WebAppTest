// Simulated database
const database = [
    { column1: 'apple', column2: 'A sweet red fruit' },
    { column1: 'banana', column2: 'A long yellow fruit' },
    { column1: 'carrot', column2: 'An orange vegetable' },
    { column1: 'date', column2: 'A sweet brown fruit often dried' },
    { column1: 'eggplant', column2: 'A purple vegetable' }
];

function search() {
    // Get the search term from the input field
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
    const resultElement = document.getElementById('result');
    
    // Find the corresponding row in the database
    const result = database.find(entry => entry.column1.toLowerCase() === searchTerm);
    
    // Display the result
    if (result) {
        resultElement.textContent = result.column2;
    } else {
        resultElement.textContent = 'No results found';
    }
}
