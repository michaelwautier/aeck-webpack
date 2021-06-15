const listItemContent = (collection) => {
  return `<p id="collection-${collection.id}" class="collection-link" href="#" data-collection="${collection.id}">
  /${collection.title} * <span>${collection.category}</span>
</p>`
}

export default listItemContent