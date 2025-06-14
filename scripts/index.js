// Declare variable to store the nav bar element
const navElement = document.getElementById("navbar");
// detect scroll event on document
document.addEventListener("scroll", function () {
    // console.log(window.scrollY);
    if (window.scrollY > 70) {
        // change navbar bg to blue
        navElement.style.backgroundColor = "#016fdd";
    } else {
        // change navbar bg to transparent
        navElement.style.backgroundColor = "transparent";
    }
});

// Objects and Arrays
const products = []
const product1 = {
    name: "Digestive",
    price: 45.56,
    available: true
}

const product2 = {
    name: "Cookies",
    price: 56,
    available: false
}


// console.table(products)

products.push(product1, product2);

console.table(products);
