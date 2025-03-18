<script>
	  import { ModeWatcher } from "mode-watcher";
	import '../app.css';
  import Navbar from '../lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<Navbar />
<ModeWatcher />
{@render children()}
