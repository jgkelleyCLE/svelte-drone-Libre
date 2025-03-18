<script>
  import ImageSlideshow from '$lib/components/custom/ImageSlideshow.svelte';


    let { data } = $props()

    const property = data.location

    const title = `${property.lat.toFixed(5)}, ${property.long.toFixed(5)} | DroneLibre`

</script>
<svelte:head>
  <title>{title}</title>
    <meta property="og:image" content={property.images[0].url} />
</svelte:head>

<div class="mt-20 mx-8 flex flex-col items-center">
    <ImageSlideshow images={property.images} />
    <div class="max-w-[1200px] w-11/12 ">
      <h1 class="text-sm md:text-xl font-semibold dark:text-gray-400 text-gray-600">{property.lat}, {property.long}</h1>

    </div>

</div>