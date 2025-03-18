<script>
    import DroneIcon from '@iconify/svelte'

    import { page } from '$app/stores';
    const isActive = (path) => {
        return $page.url.pathname === path;
    };

</script>

<div class="bg-gray-800/60 backdrop-blur-[5px] flex items-center justify-between absolute z-30 w-[95%] h-16 top-2 rounded-lg px-4 left-[50%] transform -translate-x-1/2">
    <a href="/" class="flex items-center relative">
        <h1 class="text-white font-bold text-3xl">Drone</h1>
        <span><DroneIcon icon="gis:drone" class="text-red-400 text-4xl " /></span>
        <h1 class="text-white font-bold text-3xl">Libre</h1>
    </a>

    <div class="flex items-center gap-3 text-white text-xl">
        <a class={`text-xl ${isActive("/maps") ? "text-red-400" : "text-white"}`} href="/maps">Map</a>
        <a class={`text-xl ${isActive("/list") ? "text-red-400" : "text-white"}`} href="/list">List</a>
    </div>
</div>