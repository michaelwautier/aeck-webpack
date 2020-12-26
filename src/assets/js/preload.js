const preloading = () => {
  const cube = document.querySelector('.cube')
  
  setTimeout(() => {
    cube.classList.add('show-right')
  }, 2000)
  
  setTimeout(() => {
    const content = document.getElementById('content')
    const preload = document.querySelector('.preload')
    preload.classList.add('preload-finish')
    content.classList.remove('fade')
  }, 4000)
}

export default preloading