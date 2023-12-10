import utils, {caros} from './_utils.js';
import posts from './blog/_posts.js'

const contents = utils.map(util => {
	return {
		name: util.name,
		image_1: util.image_1,
		image_2: util.image_2,
        image_3: util.image_3,
	};
});

// const posts = posts.map(post => {
// 	return {
// 		name: post.name,
// 	};
// });

console.log('post_1 >> ', posts[0].image)

console.log('contents >> ', contents)

console.log('caros >> ', caros)

// ssg
//export const prerender = true;

export function load() {
    return {
		utils: contents, 
		lated_post: posts[0].image,
		caros: caros,
	};
}
