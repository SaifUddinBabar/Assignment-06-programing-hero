
const loadCategories = () => {
    const url = "https://openapi.programming-hero.com/api/categories";
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.error("Error loading categories:", err));
};

const displayCategories = (categories) => {
    const catContainer = document.getElementById("catagoryContainer");
    catContainer.innerHTML = "";

    categories.forEach(category => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <button 
                id="category-btn-${category.id}"
                onclick="categoryBtn('${category.id}')"
                class="btn-primary w-full text-black py-2 rounded hover:bg-[#15803D] hover:text-white">
                ${category.category_name}
            </button>
        `;
        catContainer.appendChild(newDiv);
    });
};

const getAllTrees = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => {
            displayTrees(data.plants);
        });
};

const displayTrees = (trees) => {
    const container = document.getElementById("treeCatcontainer");
    container.innerHTML = "";

    trees.forEach(tree => {
        const div = document.createElement("div");
        div.className = "bg-white shadow rounded-xl p-4";
        div.innerHTML = `
            <img src="${tree.image}" alt="${tree.name}" class="w-full h-40 object-cover rounded-md mb-3">
      <h2 onclick="loadTreeDetails('${tree.id}')"
    class="font-bold text-lg cursor-pointer hover:text-green-700">
    ${tree.name}
</h2>



            </h2>
            <p class="text-sm text-gray-600">${tree.description}</p>
            <div class="flex justify-between mt-3 items-center">
                <button class="bg-green-200 text-black rounded-xl px-3 py-1">${tree.category}</button>
                <p class="price">${tree.price}</p>
            </div>
            <button onclick="cartclick('${tree.name}', ${tree.price})" 
                class="text-white bg-[#15803D] w-full mt-5 mb-5 px-2 py-2 rounded-xl">
                Add to Cart
            </button>
        `;
        container.appendChild(div);
    });
};
loadCategories()