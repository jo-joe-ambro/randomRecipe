const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'italian.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


const request = new XMLHttpRequest();
const url= 'https://www.themealdb.com/api/json/v1/1/random.php';
request.open('GET', url, true);


request.onload = function displayRecipe(){
    const data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400) {
        for(let i = 1; i <= 20; i++) {
            const ing = `strIngredient${i}`;
            const mes = `strMeasure${i}`;
            
            const ingredient = data.meals[0][ing];
            const measure = data.meals[0][mes];

            if(ingredient === "") {
                break;
            }
            
            

        }
    data.meals.forEach(meal => {
        const card = document.createElement('div');
        card.setAttribute('class','card');

        const h1 = document.createElement('h1');
        h1.textContent = meal.strMeal;

        const p = document.createElement('p');
        const instr = document.createTextNode("Instructions:");
        p.textContent = meal.strInstructions;

        container.appendChild(card);
        card.appendChild(h1);
        p.appendChild(instr);
        card.appendChild(p);
        

    });
} else{
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = 'Shucks, this crud is broken!';
    app.appendChild(errorMessage);
    }
}
request.send();


