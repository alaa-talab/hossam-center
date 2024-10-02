import axios from 'axios';

const API_URL = 'http://localhost:1337/api/articles';  // Base URL

/** Fetch all articles from Strapi */
export async function fetchPosts() {
  const res = await axios.get(`${API_URL}`);  // Corrected API call
  return res.data.data.map((post) => ({
    slug: post.slug,
    title: post.title,
    content: post.description, // Adjust according to your Strapi model
    publishDate: post.publishedAt,
    image: post.image?.url || '/default-image.jpg',
  }));
}

/** Find the latest articles */
export const findLatestPosts = async ({ count } = {}) => {
  const _count = count || 4;
  const posts = await fetchPosts();
  return posts ? posts.slice(-_count) : [];
};

/** Find an article by slug */
export async function findPostBySlug(slug) {
  const res = await axios.get(`${API_URL}?filters[slug][$eq]=${slug}`);  // Corrected API call
  const post = res.data.data[0];

  if (!post) return null;

  return {
    slug: post.slug,
    title: post.title,
    content: post.description, // Adjust according to your Strapi model
    publishDate: post.publishedAt,
    image: post.image?.url || '/default-image.jpg',
  };
}
