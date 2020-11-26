<script>
  import RestaurantList from './components/RestaurantList.svelte';
  let promise  = fetch('https://api.jsonbin.io/b/5fbded3990e7c66167f6aa01', {
    headers: {
      'secret-key': '$2b$10$WgrEnl6Ev9ry0rK.KNhgo.lGZjT0PEuOnXTSfRAd61nH5SOrvoPz.'
    }
  }).then(r => r.json() );


</script>


{#await promise}
  <h2 class="center">Loading...</h2>
{:then restaurants}
  <RestaurantList items={restaurants}/>
{:catch error}
  <h2 class="center">Some unknown error occurred, can't able to fetch the restaurants.</h2>
{/await}

<style>
  .center {
    text-align:center;
    margin: 5em auto;
  }
</style>
