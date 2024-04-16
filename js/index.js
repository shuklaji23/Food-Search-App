APIKEY = "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";

fetch(APIKEY)
  .then((res) => res.json())
  .then((data) => showData(data.meals));

function showData(data) {
  const mealList = document.getElementById("classBox");
  data.forEach((meal) => {
    const { strMeal, strMealThumb, idMeal } = meal;
    const mealData = document.createElement("div");
    mealData.innerHTML = `
    <div class="card items" style="width: 18rem">
        <img src="${strMealThumb}" alt="${strMeal}" />
        <div class="card-body">
            <p class="card-text">
                ${strMeal}
            </p>
        </div>
    </div>
    `;
    mealList.appendChild(mealData);
  });
}
