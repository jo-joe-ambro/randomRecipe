const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'italian.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

const list =
app.appendChild(logo)
app.appendChild(container)


const request = new XMLHttpRequest();
const url= 'https://www.themealdb.com/api/json/v1/1/random.php';
request.open('GET', url, true);



request.onload = function displayRecipe(){
    const data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400) {
       
        //combining measure and ingredients
        function allItems(){
        for(let i = 1; i <= 20; i++) {
            const ing = `strIngredient${i}`;
            const mes = `strMeasure${i}`;
            
            const ingredient = data.meals[0][ing];
            const measure = data.meals[0][mes];
            const itemArray = [measure + " " + ingredient];
            
            if(ingredient === "") {
                break;
            }
            
            return itemArray;
        }    
    }
    //placing JSON in card
    data.meals.forEach(meal => {
        
        const card = document.createElement('div');
        card.setAttribute('class','card');

        const name = document.createElement('h1');
        name.textContent = meal.strMeal;

        const instructions = document.createElement('p');
        instructions.textContent = meal.strInstructions;
        
        
        
        const foodItems = document.createElement('li');
        foodItems.textContent = allItems();

        container.appendChild(card);
        card.appendChild(name);
        card.appendChild(foodItems);
        card.appendChild(instructions);
        
            
    });
} else{
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Shucks, this crud is broken!';
    app.appendChild(errorMessage);
    }
}
request.send();


