// regex

CommonAPI = "https://www.themealdb.com/api/json/v1/1/";
APIKEY = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
CategoryAPI = "https://www.themealdb.com/api/json/v1/1/categories.php";

const categoryElement = document.getElementById("init");
categoryElement.addEventListener("click", () => {
  myCallingFunction("categories.php", "categories", "categories");
});

const element1 = document.getElementById("filter");
element1.addEventListener("change", (ele) => {
  const selectedValue = ele.target.value;
  if (selectedValue === "1")
    myCallingFunction("filter.php?i=", "meals", "filter");
  else if (selectedValue === "2")
    myCallingFunction("filter.php?c=Seafood", "meals", "filter");
  else if (selectedValue === "3")
    myCallingFunction("filter.php?a=Canadian", "meals", "filter");
});

const searchInput = document.querySelector(".form-control");
searchInput.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    const search_text = searchInput.value;
    myCallingFunction(search_text);
    fetch(APIKEY + search_text)
      .then((res) => res.json())
      .then((data) => showData(data.meals, "filter"));
  }
});

function myCallingFunction(data, topic, type) {
  fetch(CommonAPI + data)
    .then((res) => res.json())
    .then((newData) => showData(newData[topic], type));
}

function showData(data, type) {
  const mealList = document.getElementById("classBox");
  mealList.innerHTML = "";
  data.forEach((meal) => {
    let id, image, category, description;
    if (type === "categories") {
      const { idCategory, strCategory, strCategoryThumb } = meal;
      id = idCategory;
      image = strCategoryThumb;
      category = strCategory;
    } else if (type === "filter") {
      const { strMeal, strMealThumb, idMeal } = meal;
      id = idMeal;
      image = strMealThumb;
      category = strMeal;
    }
    const mealData = document.createElement("div");
    mealData.innerHTML = `
    <div class="card items clickable" style="width: 18rem" onclick="createAndOpenNewPage()">
        <img src="${image}" alt="${category}" />
        <div class="card-body">
            <p class="card-text">
                ${category}
            </p>
        </div>
    </div>
    `;
    mealList.appendChild(mealData);
  });
}

function createAndOpenNewPage(data) {
  // window.location.href = "use.html";

  var newPage = document.implementation.createHTMLDocument("New Page");
  newPage.write(
    '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>New Page</title></head><body><h1>This is a new page!</h1><p>This page was created dynamically.</p></body></html>'
  );
  newPage.close();
  var newPageURL = URL.createObjectURL(
    new Blob([newPage.documentElement.outerHTML], { type: "text/html" })
  );
  window.open(newPageURL, "_blank");
}
