import "../css/main.scss";
import collections from "../../app/collections"

const pageContent = document.querySelector("main")

const workButton = document.getElementById("work-button")
const contactButton = document.getElementById("contact-button")
const collectionNav = document.getElementById("collection-nav")

workButton.addEventListener("click", () => {
  workButton.classList.add('active')
  contactButton.classList.remove('active')
  pageContent.classList.add('fade')
  setTimeout(() => {
    pageContent.innerHTML = `test`
    pageContent.classList.remove('fade')
    collectionNav.classList.remove('fade')
  }, 500)
})

contactButton.addEventListener("click", () => {
  workButton.classList.remove('active')
  contactButton.classList.add('active')
  collectionNav.classList.add('fade')
  pageContent.classList.add('fade')
  setTimeout(() => {
    pageContent.innerHTML = `
    <div class="flex-item">
      <div class="bio-box">
        <div class="picture-bio">
          <img src="./img/bio.jpeg" alt="julien" />
          <p>Photography: Paul Baudon</p>
        </div>
        <div class="text-bio">
          <p>
            L’ascenseur démarra tout seul après que la porte se soit fermée. Il descendait. Il n’arrêtait pas de descendre. Puis, il s’arrêta enfin. La porte s’ouvrit. Et David eut la stupeur de sa vie. Devant lui se déployait un complexe informatique. Une vingtaine de personnes se déplaçaient d’un poste à l’autre regardant au passage les écrans géants muraux situés au fond de la salle machinerie impressionnante.
          </p>
          <p>
            Internet n’est pas le seul réseau. Il existe un autre réseau plus performant. Je ne t’apprendrais rien en te disant qu’Internet a été crée par l’armée Américaine dans un but militaire. Internet n’était que le prototype. Un autre réseau a été créé pour les
          </p>
        </div>
      </div>
    </div>
    <div class="flex-item">
      <div class="contact-box flex">
        <div class="contact-text">
          <p>julien@aeck.io</p>
          <p>(+262)693 63 64 36</p>
          <div class="socials flex">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </div>
    `
    pageContent.classList.remove('fade')
  }, 500)
})

const collectionsList = document.getElementById("collections-list")

collections.forEach(collection => {
  const listItem = document.createElement('li')
  listItem.innerHTML = `<a id="collection-${collection.id}" class="collection-link" href="#" data-collection="${collection.id}">
                          /${collection.title} * <span>${collection.category}</span>
                        </a>`
  listItem.classList.add("list-item")
  collectionsList.appendChild(listItem)
});

const collectionLinks = [...document.querySelectorAll('.list-item')]
collectionLinks[0].classList.add('active')

collectionLinks.forEach(el => {
  el.addEventListener('click', () => {
    collectionsList.querySelector('.active').classList.remove('active')
    el.classList.add('active')
    const collectionId = el.firstChild.dataset.collection
    const selectedCollection = collections[collectionId - 1]
    pageContent.innerHTML = `
    <div class="collection-text">${selectedCollection.text}</div>
    <img class="collection-cover" src="./img/${selectedCollection.image}">
    `
    const collectionText = document.querySelector('.collection-text')
    const collectionCover = document.querySelector('.collection-cover')
    collectionCover.addEventListener('click', (e) => {
      collectionText.classList.add("fade")
      setTimeout(() => {
        collectionText.remove()}, 500)      
      collectionCover.classList.add("active")
    })
    if (selectedCollection.category === "Graphic Design") {
      document.body.style.backgroundColor = "#7919C5"
      document.body.style.color = "white"
    } else {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  })
})

