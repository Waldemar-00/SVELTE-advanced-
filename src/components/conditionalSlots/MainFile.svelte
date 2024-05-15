<script>
	import Profile from './Profile.svelte';
</script>

<h2>Profile</h2>
<Profile>
	<span slot="name">Bob</span>
	<span slot="email">bob_123@gmail.com</span>
</Profile>
<hr />
<Profile>
	<span slot="name">John</span>
	<span slot="phone">+375 29 777-44-35</span>
</Profile>
<hr />
<Profile>
	<span slot="name">Denis</span>
	<span slot="email">denis_77@gmail.com</span>
</Profile>
<hr />
<Profile>
	<span slot="name">Mikle</span>
	<span slot="phone">+375 29 444 82 43</span>
	<span slot="email">mikle_82@gmail.com</span>
</Profile>
