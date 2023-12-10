<script>
    /** @type {import('./$types').PageData} */
    export let data;
    console.log('post >> ', data.post)
    //console.log('[ slug ] process build_mode >> ', process.env.SVELTE_APP_BUILD_MODE)
  </script>
  
  <h1>{data.post.title}</h1>
  <div>{@html data.post.html}</div>