
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

