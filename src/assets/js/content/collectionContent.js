const collectionContent = (selectedCollection) => {
  return `
    <div class="flex justify-content-between align-end full-width">
      <div class="collection-text">${selectedCollection.text}</div>
      <img class="collection-cover" src="./img/${selectedCollection.image}">
    </div>
  `
}
  
export default collectionContent