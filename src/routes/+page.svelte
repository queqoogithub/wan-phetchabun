<script>

    /** @type {import('./$types').LayoutData} */
    export let data;
    // console.log('data >> ', data.utils[0].image_1)
    const carousel = data.utils[0]
    const announcement = data.utils[1]
    const promotion = data.utils[2]
    const latedPost = data.lated_post
    // console.log('process node_env >> ', process.env.NODE_ENV)
    // console.log('process build_mode >> ', process.env.SVELTE_APP_BUILD_MODE)
</script>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>


<div class="grid lg:grid-cols-3 md:sm:grid-cols-1 gap-4 p-3 place-items-center">
    <div class="col-span-2 ">
        <img src="{latedPost}" alt="Logo" class="object-cover mb-2 rounded" />
    </div>
    <div class="w-auto ">
        <img src="https://img.freepik.com/premium-vector/we-have-moved-new-office-address-icon-location-move-change-location-announcement-speaker-concept_41737-977.jpg" alt="Logo" class="object-cover mb-2 rounded " />
    </div>
    
</div>

<div class="grid lg:grid-cols-3 md:sm:grid-cols-1 gap-4 p-3 place-items-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="h-48 w-full" src="https://ginkotown.store/cdn/shop/files/NrealAir_1_1024x1024@2x.webp?v=1686721585" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="h-48 w-full" src="https://ophtus.com/wp-content/uploads/2023/06/facebook-cover.jpg" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden shadow-lg ">
        <img class="h-48 w-full" src="https://ophtus.com/wp-content/uploads/2023/03/material.jpg" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
</div>


  