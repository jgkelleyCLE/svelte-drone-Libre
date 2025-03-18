<script>

    let {images} = $props()

    $inspect(images)

    let currentIndex = $state(0);
  let isTransitioning = $state(false);
  
  // Navigation functions
  function nextSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(() => isTransitioning = false, 300);
  }
  
  function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    setTimeout(() => isTransitioning = false, 300);
  }
  
  function goToSlide(index) {
    if (isTransitioning || currentIndex === index) return;
    isTransitioning = true;
    currentIndex = index;
    setTimeout(() => isTransitioning = false, 300);
  }

</script>

<div class="w-full h-auto mx-auto flex flex-col items-center">
    <!-- SLIDESHOW CONTAINER -->
    <div class="relative w-full max-w-[1000px]  overflow-hidden">
      <!-- MAIN IMAGE -->
      <div 
        class="w-full h-full max-w-[1000px] object-contain transition-opacity duration-300 ease-in-out" 
        
      >
        <img 
          src={images[currentIndex].url} 
          alt={images[currentIndex].alt || `Image ${currentIndex + 1}`} 
          class="w-full h-full object-cover rounded-t-md"
        />
      </div>
      
      <!-- NAVIGATION -->
      <button 
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 md:p-3 rounded-full hover:bg-black/70 transition"
        onclick={prevSlide}
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button 
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 md:p-3  rounded-full hover:bg-black/70 transition"
        onclick={nextSlide}
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      
      <!-- IMAGE COUNT-->
      <div class="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
    
    <!-- THUMBNAILS -->
    <div class="w-full max-w-[1000px] py-4 bg-gray-100 overflow-x-auto rounded-b-md">
      <div class="flex gap-2 px-4 max-w-full">
        {#each images as image, index}
          <button 
            onclick={() => goToSlide(index)}
            class="flex-shrink-0 focus:outline-none transition-all duration-200 transform hover:scale-105"
            aria-label={`Go to image ${index + 1}`}
          >
            <img 
              src={image.url} 
              alt={image.alt || `Thumbnail ${index + 1}`} 
              class="w-28 h-16 object-cover rounded-md border-2" 
              class:border-red-400={currentIndex === index}
              class:border-transparent={currentIndex !== index}
            />
          </button>
        {/each}
      </div>
    </div>
  </div>
