// const listEl = document.querySelectorAll(`.item`);
// console.log(`Number of categories: ${listEl.length}`);

// const title = document.querySelectorAll(`.item h2`).textContent
// console.log(`Categoy: ${title}`);

// const categoryList = document.querySelectorAll(`item ul`)

// const categoryListArray = []

// categoryList.forEach(element => {
//     categoryListArray.push(`Category: ${title} Elements|: ${element.children.length}`)})

//     console.log(categoryListArray.join(""))

const categoriesEl = document.getElementById(`categories`);
const elItems = [...categoriesEl.children];
const countEl = elItems.length;
console.log("Number of categories: ", countEl);
elItems.forEach((element) => {
  const elTitle = element.firstElementChild;
  const countElItems = elTitle.nextElementSibling.children;
  console.log("Category: ", elTitle.textContent);
  console.log("Elements: ", countElItems.length);
});