<script>
  import { Router, Link } from "svelte-routing";
  let currentFilters = [];
  function filterRestaurants(ev) {
    const priceRange = ev.target.value;
    if(!currentFilters.includes(priceRange)) {
      currentFilters.push(priceRange);
    } else {
      currentFilters.pop(priceRange);
    }
    filteredRestaurants = currentFilters.length > 0 ? restaurants.filter(r => currentFilters.includes(r.priceRange)) : restaurants;

  }

let restaurants = [];
  let promise  = fetch('https://api.jsonbin.io/b/5fbded3990e7c66167f6aa01', {
    headers: {
      'secret-key': '$2b$10$WgrEnl6Ev9ry0rK.KNhgo.lGZjT0PEuOnXTSfRAd61nH5SOrvoPz.'
    }
  }).then(r => { 
    let data = r.json();
    restaurants = data;
    return data;
  });
  
  let filteredRestaurants = restaurants;
  export let url;

</script>

<Router url="{url}">
<main id="restaurants">
  <form>
    <label for="txtSearch">Search:</label>
    <input type="text" id="txtSearch"/>
    <label>Price range: </label>
    <label>$<input type="checkbox" value="$" on:click={filterRestaurants}/></label>
    <label>$$<input type="checkbox" value="$$" on:click={filterRestaurants}/></label>
    <label>$$$<input type="checkbox" value="$$$" on:click={filterRestaurants}/></label>
    <label>$$$$<input type="checkbox" value="$$$$" on:click={filterRestaurants}/></label>
    <button type="button">Clear</button>
  </form>
  {#await promise}
  <h2>Loading...</h2>
{:then restaurants}
  <div class="restaurant-list">
    {#each restaurants as r}

      <Link to="/order/{r.id}">
      <div class="card">
        <h2>{r.name}</h2>
        <img src="https://content.demo.microfrontends.com{r.imageSrc}" alt="{r.imageDescription}" />
        <p>{r.description}</p>
      </div>
      </Link>
    {/each}
  </div>

{:catch error}
  <h2>Some unknown error occurred, can't able to fetch the restaurants.</h2>
{/await}
</main>
</Router>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  #restaurants {
    max-width: 1150px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .restaurant-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .card {
    display: inline-block;
    width: 100%;
    max-width: 350px;
    margin: 0px 5px;
  }

  form {
    display: flex;
    justify-content: space-evenly;
  }
</style>
