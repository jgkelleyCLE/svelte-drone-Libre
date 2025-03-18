<script>


let { data } = $props()
const properties = data.locations
$inspect(properties)

</script>

<div class="mt-20 w-11/12 flex flex-col items-center mx-auto">
    <h1 class="text-xl font-semibold ml-8">Properties ({properties.length})</h1>
    <div >
        {#each properties as item}
        <a
            href={`/property/${item._id}`}
        class="flex flex-col md:flex-row items-center justify-between p-4 border border-gray-200 rounded-md my-2 w-full hover:bg-gray-100 transition duration-300"
        >
            <img src={item.images[0].url} alt={item.address} class="rounded-md w-[450px] object-cover h-[200px]" />

            <div class="flex flex-col items-center md:ml-2">
                <h1 class="font-bold">{item.lat}, {item.long}</h1>
                <div class="flex items-center gap-2 flex-wrap ">
                {#each item.images as image}
                    <img src={image.url} alt={item.address} class="rounded-md w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-cover border-2 border-red-400" />
                    {/each}
                </div>
            </div>

        </a>
        {/each}
    </div>
</div>