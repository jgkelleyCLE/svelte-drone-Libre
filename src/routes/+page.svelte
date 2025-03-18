<script>
  import { goto } from '$app/navigation';

    const { data } = $props()

    const title = 'DroneLibre'

    const ogImage = "https://firebasestorage.googleapis.com/v0/b/collab-checklist.appspot.com/o/media%2FDroneLibreOpenGraph.webp?alt=media&token=0fddcbf8-e628-4822-8934-d376bac3b3cd"

</script>
<svelte:head>
  <title>{title}</title>
  <meta property="og:image" content={ogImage} />
</svelte:head>

<div class="h-full supports-[height:100cqh]:h-[100cqh] supports-[height:100svh]:h-[100svh]">
    <video
      class="w-[100vw] h-full object-cover "
      src="https://res.cloudinary.com/ddpcm88nh/video/upload/v1680114202/drone_api/videoBG5_mp4_ip2pds.mp4"
      autoPlay
      loop
      muted
      playsInline
    ></video>   
    <!-- OVERLAY -->
    <div class="bg-black/30 w-[100vw] h-full absolute bottom-0">
      <div class="flex flex-col items-center w-full">
        <h1 class="text-4xl md:text-6xl font-extrabold text-white/70 mt-24 flex-wrap text-center">ELEVATED PERSPECTIVES</h1>

        <div class="absolute bottom-10 flex flex-col md:flex-row justify-center items-center gap-3 w-full">
            <button class="bg-red-400/60  transition duration-300 p-3 text-white text-xl rounded-md w-11/12 max-w-[400px] font-bold cursor-pointer hover:bg-red-400" onclick={() => goto('/maps')}>
                View Properties on Map
            </button>
            

        </div>
      </div>
    </div>
  </div>