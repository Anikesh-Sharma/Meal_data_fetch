// Function to fetch category data
async function getCategoriesData() {
    const categoryUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
    
    try {
        const response = await fetch(categoryUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        displayData(data); // Display the fetched data on the webpage
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}

// Function to fetch ingredient data
async function getIngredientData() {
    const ingredientUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
    
    try {
        const response = await fetch(ingredientUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        displayData(data); // Display the fetched data on the webpage
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}

// Function to display fetched data on the webpage
function displayData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = JSON.stringify(data, null, 2); // For a better display format
}

// Adding event listeners to the buttons
document.getElementById('get-category-data').addEventListener('click', getCategoriesData);
document.getElementById('get-ingredient-data').addEventListener('click', getIngredientData);
