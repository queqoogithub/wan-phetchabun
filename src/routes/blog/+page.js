import posts from './_posts.js';

const contents = posts.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		image: post.image,
		html: post.html,
	};
});

console.log('contents >> ', contents)

// ssg
//export const prerender = true;

export function load() {
    return {
		posts: contents, 
		gg: "gigi"
	};
}
