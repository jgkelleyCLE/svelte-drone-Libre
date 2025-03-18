<script>
  import { MapLibre } from 'svelte-maplibre';
  import Marker from 'svelte-maplibre/Marker.svelte';
  import Popup from 'svelte-maplibre/Popup.svelte';
  import * as Drawer from "$lib/components/ui/drawer"; 
  import { onMount } from 'svelte';

  let { data } = $props()
  const properties = data.locations
  $inspect(properties)

  let selectedProperty = $state(null)
  let open = $state(false)
  let isDarkMode = $state(false)
  $inspect(selectedProperty)

  onMount(() => {
    // Initial check
    isDarkMode = window.matchMedia('(prefers-color-scheme: light)').matches || 
                 document.documentElement.classList.contains('dark');
    
    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      isDarkMode = mediaQuery.matches || document.documentElement.classList.contains('dark');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Also check for class changes if you're toggling dark mode with a class
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          isDarkMode = document.documentElement.classList.contains('dark');
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      observer.disconnect();
    };
  });


  const handleMarkerClick = (item) => {
    selectedProperty = item
    open = true
  }

</script>

<div class="h-screen w-full">
    <MapLibre 
  center={[-81.528010,41.427060]}
  zoom={8.5}
  class="w-full h-full"
  standardControls
  
  style={isDarkMode 
    ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json" 
    : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    }
  
  >

  {#each properties as item}
  <Marker lngLat={[item.long, item.lat]} onclick={()=> handleMarkerClick(item)}>
    <img 
    src={item.images[0].url} 
    alt={item.name} 
    class="w-10 h-10 rounded-full object-cover border-2 border-red-400 " 
    />
    <span class="animate-ping absolute bottom-0 inline-flex h-full w-full rounded-full opacity-75 z-0 "></span>

    <Popup class="">
      <div class="flex flex-col md:flex-row items-center">
        <img src={item.images[0].url} alt={item.name} class="w-[250px] md:w-[350px] rounded-md" />
        <div class="flex flex-col items-center mx-auto w-full md:ml-2">
          <h1 class="font-bold text-xs md:text-sm text-gray-600">{item.lat.toFixed(6)}, {item.long.toFixed(6)}</h1>
          <a href={`/property/${item._id}`} class="bg-red-400 hover:bg-red-400/80 transition duration-300 p-2 rounded-md text-white font-bold w-full m-2 flex items-center justify-center">View Property Details</a>

        </div>
      </div>
    </Popup>
    
</Marker>
    
  {/each}

  
  
</MapLibre>
</div>
