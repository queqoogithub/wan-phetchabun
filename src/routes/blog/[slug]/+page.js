import { error } from '@sveltejs/kit';
import posts from '../_posts.js';

const lookup = new Map();
posts.forEach(post => {
	lookup.set(post.slug, post);
});
 
// ssg
//export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load({ params }) { //{ params }
  // if (params.slug === 'hello-world') {
  //   return {
  //     title: 'Hello world!',
  //     content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
  //   };
  // }
  const { slug } = params;
  console.log('lookup get >> ', lookup.get(slug))
  if (lookup.has(slug)) {
    return {
      post: lookup.get(slug)
    };
  }
  throw error(404, 'Not found');
}