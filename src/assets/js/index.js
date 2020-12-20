import "../css/main.scss";
import collections from "../../app/collections"

const collectionsList = document.getElementById("collections-list")

collections.forEach(collection => {
  const listItem = document.createElement('li')
  listItem.innerHTML = `<a href="#">
                          /${collection.title} * <span>${collection.category}</span>
                        </a>`
  listItem.classList.add("list-item")
  collectionsList.appendChild(listItem)
});
