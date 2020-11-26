<script>
  export let items;
  import { Router, Link } from "svelte-routing";
  let currentFilters = [];
  let restaurants = items;

  function filterRestaurants(ev) {
    const priceRange = ev.target.value;
    if(!currentFilters.includes(priceRange)) {
      currentFilters.push(priceRange);
    } else {
      currentFilters.splice(currentFilters.findIndex(i => i === priceRange), 1);
    }
     restaurants = currentFilters.length > 0 ? items.filter(r => currentFilters.includes(r.priceRange)) : items;

  }

  function search(ev) {
    const query = ev.target.value.toLowerCase();
    if(query && query.length > 2 ) {
      restaurants = items.filter(i => i.name.toLowerCase().includes(query));
    } else {
      restaurants = items;
    }
  }

  function clearFilters() {
    currentFilters = [];
    filterRestaurants();
  }

  export let url;

</script>
<Router url="{url}">
<main id="restaurants">
  <form>
    <label for="txtSearch">Search: 
   <input type="text" id="txtSearch" on:input={search}/>
   </label>
    <label>Price range: </label>
    <label>$<input type="checkbox" value="$" on:click={filterRestaurants}/></label>
    <label>$$<input type="checkbox" value="$$" on:click={filterRestaurants}/></label>
    <label>$$$<input type="checkbox" value="$$$" on:click={filterRestaurants}/></label>
    <label>$$$$<input type="checkbox" value="$$$$" on:click={filterRestaurants}/></label>
    <button class="clear-button" type="button" on:click={clearFilters}>Clear</button>
  </form>
  <div class="restaurant-list">
    {#each restaurants as r}

      <Link to="/order/{r.id}">
      <div class="card">
        <div class="card--title">
        <h2>{r.name}</h2>
        <span>{r.priceRange}</span>
        </div>
        <img src="https://content.demo.microfrontends.com{r.imageSrc}" alt="{r.imageDescription}" />
        <p class="description">{r.description}</p>
      </div>
      </Link>
    {/each}
  </div>
</main>
</Router>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  a,a:hover, a:visited {
    text-decoration: none;
    color: #2b2318;
  }

  #txtSearch {
    height: 30px;
    font-size: 20px;
    margin-left: 5px;
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
    margin-top: 1em;
  }

  .card {
    display: inline-block;
    width: 100%;
    max-width: 350px;
    margin: 0px 5px;
  }

  .card--title {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    justify-content: space-evenly;
    font-size: 24px;
  }

  .clear-button {
    height: 30px;
    width: 100px;
    font-size: 20px;
    background-color: rgb(231, 150, 82);
    color: rgb(43, 35, 24);
    border-radius: 2px;
    border: none;
    cursor: pointer;
  }

  .description {
    margin-top: 0;
    font-size: 20px;
    text-align:left;
  }

</style>
