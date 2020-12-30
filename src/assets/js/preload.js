const preloading = () => {
  const cube = document.querySelector('.cube')
  
  setTimeout(() => {
    cube.classList.add('show-right')
  }, 2000)
  
  setTimeout(() => {
    const preload = document.querySelector('.preload')
    preload.classList.add('preload-finish')
    
    setTimeout(() => {
      const content = document.getElementById('content')
      content.classList.remove('fade')
    }, 500)
  }, 4000)
}

export default preloading