<script>
  let { data } = $props();
  const properties = data.locations;

  const title = `Properties | DroneLibre`;
  const ogImage =
    'https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FDroneLibreOpenGraph.webp?alt=media&token=0fddcbf8-e628-4822-8934-d376bac3b3cd';
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:image" content={ogImage} />
</svelte:head>

<div class="mt-20 w-11/12 flex flex-col items-center mx-auto">
  <h1 class="text-xl font-semibold ml-8 dark:text-gray-400 text-gray-600">Properties ({properties.length})</h1>
  <div>
    {#each properties as item}
      <a
        href={`/property/${item._id}`}
        class="flex flex-col md:flex-row items-center justify-between p-4 border-2 border-gray-200 dark:border-gray-500 dark:hover:bg-gray-800/80 rounded-md my-2 w-full hover:bg-gray-100 transition duration-300"
      >
        <img src={item.images[0].url} alt={item.address} class="rounded-md w-[450px] object-cover h-[200px]" />

        <div class="flex flex-col items-center md:ml-2">
          <h1 class="font-bold dark:text-gray-400 text-gray-600">{item.lat}, {item.long}</h1>
          <div class="flex items-center gap-2 flex-wrap">
            {#each item.images as image}
              <img
                src={image.url}
                alt={item.address}
                class="rounded-md w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-cover border-2 border-red-400"
              />
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
