const collectionContent = (selectedCollection) => {
  return `
    <div class="grid">
      <div class="photoandtext">
        <div class="collection-text">${selectedCollection.text}</div>
        <img class="collection-cover" src="./img/${selectedCollection.images[0]}">
      </div>
    </div>
  `
}
  
export default collectionContent