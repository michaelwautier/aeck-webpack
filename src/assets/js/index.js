import "../css/main.scss";
import collections from "../../app/collections"
import "./imageImport"

import contactPageContent from './content/contactPageContent'
import collectionContent from './content/collectionContent'
import listItemContent from './content/listItemContent'

import switchToWhiteBg from './display/switchToWhiteBg'
import switchToPurpleBg from './display/switchToPurpleBg'

const pageContent = document.querySelector("main")
const workButton = document.getElementById("work-button")
const contactButton = document.getElementById("contact-button")
const collectionNav = document.getElementById("collection-nav")

workButton.addEventListener("click", () => {
  switchToWhiteBg()
  workButton.classList.add('active')
  contactButton.classList.remove('active')
  pageContent.classList.add('fade')
  setTimeout(() => {
    pageContent.innerHTML = "<img src='./img/work.png' class='work-cover' />"
    pageContent.classList.remove('fade')
    collectionNav.classList.remove('fade')
  }, 500)
})

contactButton.addEventListener("click", () => {
  switchToWhiteBg()
  workButton.classList.remove('active')
  contactButton.classList.add('active')
  collectionNav.classList.add('fade')
  pageContent.classList.add('fade')
  setTimeout(() => {
    pageContent.innerHTML = contactPageContent
    pageContent.classList.remove('fade')
  }, 500)
})

const collectionsList = document.getElementById("collections-list")

collections.forEach(collection => {
  const listItem = document.createElement('li')
  listItem.classList.add("list-item")
  listItem.innerHTML = listItemContent(collection)
  collectionsList.appendChild(listItem)
});

const collectionLinks = [...document.querySelectorAll('.list-item')]
collectionLinks[0].classList.add('active')

collectionLinks.forEach(el => {
  el.addEventListener('click', () => {
    pageContent.classList.add('fade')
    collectionsList.querySelector('.active').classList.remove('active')
    el.classList.add('active')
    const collectionId = el.firstChild.dataset.collection
    const selectedCollection = collections[collectionId - 1]
    setTimeout(() => {
      pageContent.innerHTML = collectionContent(selectedCollection)
      const collectionText = document.querySelector('.collection-text')
      const collectionCover = document.querySelector('.collection-cover')
      collectionCover.addEventListener('click', (e) => {
        collectionText.classList.add("fade")
        collectionText.classList.add("move-to-left")     
        collectionCover.classList.add("active")
      })
      selectedCollection.category === "Graphic Design" ? switchToPurpleBg() : switchToWhiteBg()
      pageContent.classList.remove('fade')
    }, 500) 
  })
})

