// services/api.ts
import axios from 'axios';
import { BlogPost } from '~/shared/types';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'; // Update this to your Strapi instance URL

// Fetch blog posts from Strapi
export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get(`${API_URL}/blog-posts`); // Adjust the endpoint according to your Strapi collection
  return response.data;
};
