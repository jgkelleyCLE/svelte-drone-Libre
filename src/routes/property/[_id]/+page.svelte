<script>
  import ImageSlideshow from '$lib/components/custom/ImageSlideshow.svelte';


    let { data } = $props()
    $inspect(data.location)

    const property = data.location

</script>

<div class="mt-20 mx-8">
    <ImageSlideshow images={property.images} />
    <h1 class="md:text-xl font-semibold">{property.lat}, {property.long}</h1>

</div>