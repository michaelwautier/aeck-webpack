import "../css/main.scss";
import collections from "../../app/collections"
import "./imageImport"
import prefetchImages from 'prefetch-image'

import preloading from './preload'
import scroll from './scroll'

import contactPageContent from './content/contactPageContent'
import collectionContent from './content/collectionContent'
import listItemContent from './content/listItemContent'

import switchToWhiteBg from './display/switchToWhiteBg'
import switchToPurpleBg from './display/switchToPurpleBg'

// preloading()



const pageContent = document.querySelector("main")
const workButton = document.getElementById("work-button")
const contactButton = document.getElementById("contact-button")
const collectionNav = document.getElementById("collection-nav")
const workButton2 = document.getElementById("work-button2")
const contactButton2 = document.getElementById("contact-button2")
const workButtons = [workButton, workButton2]
const contactButtons = [contactButton, contactButton2]
const bulletsDiv = document.getElementById("bullets")

workButtons.forEach(button => {
  button.addEventListener("click", () => {
    switchToWhiteBg()
    workButton.classList.add('active')
    contactButton.classList.remove('active')
    workButton2.classList.add('active')
    contactButton2.classList.remove('active')
    pageContent.classList.add('fade')
    setTimeout(() => {
      pageContent.innerHTML = "<img src='./img/work.png' class='work-cover' />"
      pageContent.classList.remove('fade')
      collectionNav.classList.remove('fade')
    }, 500)
  })
});
contactButtons.forEach(button => {
  button.addEventListener("click", () => {
    switchToWhiteBg()
    workButton.classList.remove('active')
    contactButton.classList.add('active')
    workButton2.classList.remove('active')
    contactButton2.classList.add('active')
    collectionNav.classList.add('fade')
    pageContent.classList.add('fade')
    setTimeout(() => {
      pageContent.innerHTML = contactPageContent
      pageContent.classList.remove('fade')
    }, 500)
  })
});



const collectionsList = document.getElementById("collections-list")

let index = 1 

collections.forEach(collection => {
  const listItem = document.createElement('li')
  listItem.classList.add("list-item")
  listItem.innerHTML = listItemContent(collection)
  collectionsList.appendChild(listItem)
  const bullet = document.createElement("div")
  bullet.classList.add("bullet")
  bullet.dataset.collectionId = index
  index++
  bulletsDiv.appendChild(bullet)
});

const collectionLinks = [...document.querySelectorAll('.list-item')]

collectionLinks.forEach(el => {
  el.addEventListener('click', () => {
    el.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"})
    pageContent.classList.add('fade')
    if (collectionsList.querySelector('.active')) {
      collectionsList.querySelector('.active').classList.remove('active')
    }
    if (bulletsDiv.querySelector('.active')) {
      bulletsDiv.querySelector('.active').classList.remove('active')
    }
    el.classList.add('active')
    const collectionId = el.firstChild.dataset.collection
    const selectedCollection = collections[collectionId - 1]
    const bullet = bulletsDiv.childNodes[collectionId]
    bullet.classList.add('active')
    const images = selectedCollection.images.map(image => {
      return `img/${image}`
    })
    prefetchImages(images)
    setTimeout(() => {
      pageContent.innerHTML = collectionContent(selectedCollection)
      centerCollectionCover(selectedCollection)
      selectedCollection.category === "Graphic Design" ? switchToPurpleBg() : switchToWhiteBg()
      pageContent.classList.remove('fade')
    }, 500) 
  })
})



const allBullets = [...document.querySelectorAll('.bullet')]
allBullets.forEach(el => {
  el.addEventListener('click', () => {
    pageContent.classList.add('fade')
    if (collectionsList.querySelector('.active')) {
      collectionsList.querySelector('.active').classList.remove('active')
    }
    if (bulletsDiv.querySelector('.active')) {
      bulletsDiv.querySelector('.active').classList.remove('active')
    }
    el.classList.add('active')
    console.log(el.dataset)
    const selectedCollection = collections[el.dataset.collectionId - 1]
    const collectionLink = collectionLinks[el.dataset.collectionId - 1]
    collectionLink.classList.add('active')
    collectionLink.scrollIntoView({behavior: "smooth", block: "nearest", inline: "center"})
    const bullet = bulletsDiv.childNodes[el.dataset.collectionId]
    bullet.classList.add('active')
    const images = selectedCollection.images.map(image => {
      return `img/${image}`
    })
    prefetchImages(images)
    setTimeout(() => {
      pageContent.innerHTML = collectionContent(selectedCollection)
      centerCollectionCover(selectedCollection)
      selectedCollection.category === "Graphic Design" ? switchToPurpleBg() : switchToWhiteBg()
      pageContent.classList.remove('fade')
    }, 500) 
  })
})

const centerCollectionCover = (collection) => {
  const collectionText = document.querySelector('.collection-text')
  const collectionCover = document.querySelector('.collection-cover')
  const collectionDiv = document.querySelector('.photoandtext')
  // const emptyDiv = document.querySelector('.empty')
  let counter = 1
  collectionCover.addEventListener('click', (e) => {
    if (collectionCover.classList.contains("active")) {
    console.log(counter)
      if (counter === collection.images.length || collection.images.length === 1) {
        collectionText.classList.remove("fade")
        collectionText.classList.remove("move-to-left")     
        // collectionCover.classList.remove("active")
        collectionCover.classList.add("fade")
        setTimeout(() => {
          collectionCover.src = `img/${collection.images[0]}`
        }, 600)
        setTimeout(() => {
          collectionCover.classList.remove("fade")
        }, 800)
        counter = 1
      } else {
        collectionText.classList.add("fade")
        collectionText.classList.add("move-to-left")   
        collectionCover.classList.add("fade")
        setTimeout(() => {
          collectionCover.src = `img/${collection.images[counter - 1]}`
        }, 600)
        setTimeout(() => {
          collectionCover.classList.remove("fade")
        }, 800)
        counter++
      }
    } else {
      collectionText.classList.add("fade")
      collectionText.classList.add("move-to-left")     
      collectionCover.classList.add("active")
      collectionDiv.style.justifyContent = 'center'
      collectionDiv.style.width = '100%'
    }
  })
}

  scroll()

