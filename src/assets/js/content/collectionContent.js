const collectionContent = (selectedCollection) => {
  return `
    <div class="photoandtext">
      <div class="collection-text">${selectedCollection.text}</div>
      <img class="collection-cover" src="./img/${selectedCollection.images[0]}">
    </div>
  `
}
  
export default collectionContent