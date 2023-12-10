<script>
  import { component_subscribe } from "svelte/internal";
  import { paginate, LightPaginationNav } from "svelte-paginate";

  /** @type {import('./$types').PageLoad} */
  export let data;
  console.log("data >> ", data);
  // console.log('process node_env >> ', process.env.NODE_ENV)
  // console.log('process build_mode >> ', process.env.SVELTE_APP_BUILD_MODE)
  let items = data.posts;
  let currentPage = 1;
  let pageSize = 6;
  $: paginatedItems = paginate({ items, pageSize, currentPage });
</script>

<aside>
  <h2 class="text-3xl font-bold mb-4">🔥 Hot Posts</h2>
  <ul
    class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 p-3 place-items-center"
  >
    {#each paginatedItems as post}
      <li class="rounded mb-3 w-80 rounded overflow-hidden shadow-lg">
        <a href="/blog/{post.slug}">
          <img
            src={post.image}
            alt="Logo"
            class="object-cover h-48 w-80 mb-2 "
          />
          <div class="h-16 px-2 font-medium text-lg">{post.title}</div>
        </a>
      </li>
    {/each}
  </ul>
</aside>

<LightPaginationNav
  totalItems={items.length}
  {pageSize}
  {currentPage}
  limit={1}
  showStepOptions={true}
  on:setPage={(e) => (currentPage = e.detail.page)}
/>
