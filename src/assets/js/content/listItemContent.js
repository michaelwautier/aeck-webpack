const listItemContent = (collection) => {
  return `<a id="collection-${collection.id}" class="collection-link" href="#" data-collection="${collection.id}">
  /${collection.title} * <span>${collection.category}</span>
</a>`
}

export default listItemContent