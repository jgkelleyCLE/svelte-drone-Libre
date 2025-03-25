<script>
  import { toggleMode } from 'mode-watcher';
  import { Button } from '$lib/components/ui/button/index.js';
  import SunIcon from '@iconify/svelte';
  import MoonIcon from '@iconify/svelte';
</script>

<Button onclick={toggleMode} variant="outline" size="icon">
  <SunIcon icon="circum:sun" class="h-[1.75rem] w-[1.75rem] rotate-0 text-black scale-100 " />
  <MoonIcon
    icon="solar:moon-linear"
    class="absolute h-[1.2rem] w-[1.2rem] text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
  />
  <span class="sr-only">Toggle theme</span>
</Button>
