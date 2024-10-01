import axios from 'axios';

const API_URL = 'http://localhost:1337/api/articles';

/** Fetch all articles from Strapi */
export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    const posts = response.data.data; // Access the 'data' array from the response
    return posts.map(post => ({
      id: post.id,
      slug: post.slug,          // Ensure this matches the slug in Strapi
      title: post.title,        // Ensure all fields match Strapi
      content: post.description, // Use 'description' if no 'content' field exists
      publishDate: post.publishedAt, // Directly access 'publishedAt'
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};


/** Find the latest articles */
export const findLatestPosts = async ({ count } = {}) => {
  const _count = count || 4;
  const posts = await fetchPosts();
  return posts ? posts.slice(-_count) : [];
};

/** Find an article by slug */
export const findPostBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}?filters[slug][$eq]=${slug}`);
    const post = response.data.data[0];
    if (!post) return null;
    
    return {
      id: post.id,
      slug: post.attributes.slug,
      title: post.attributes.title,
      content: post.attributes.content,
      image: post.attributes.image?.url || '',
      publishDate: post.attributes.published_at,
    };
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
};
