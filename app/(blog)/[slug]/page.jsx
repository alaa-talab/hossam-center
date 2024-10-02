import { fetchPosts, findPostBySlug } from '~/utils/posts'; // Ensure imports are correct
import { notFound } from 'next/navigation'; // Import notFound

export async function generateStaticParams() {
  const posts = await fetchPosts(); // Fetch all posts from Strapi
  return posts.map((post) => ({
    slug: post.slug, // Ensure the slug is correctly passed
  }));
}

export async function generateMetadata({ params }) {
  const post = await findPostBySlug(params.slug);
  if (!post) {
    return notFound(); // Return 404 if post not found
  }
  return { title: post.title, description: post.content.slice(0, 150) };
}

export default async function BlogPostPage({ params }) {
  const post = await findPostBySlug(params.slug); // Fetch the post based on slug

  if (!post) {
    return notFound(); // Return 404 if post not found
  }

  return (
    <section className="mx-auto py-8 sm:py-16 lg:py-20">
      <article>
        <header className={post.image ? 'text-center' : ''}>
          <p className="mx-auto max-w-3xl px-4 sm:px-6">
            <time dateTime={post.publishDate}>{new Date(post.publishDate).toLocaleDateString()}</time>
          </p>
          <h1 className="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
            {post.title}
          </h1>
          {post.image ? (
            <img
              src={post.image}
              className="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
              alt={post.title}
              width={900}
              height={480}
            />
          ) : (
            <img
              src="/default-image.jpg"
              alt="Default Image"
              className="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
              width={900}
              height={480}
            />
          )}
        </header>
        <div className="prose-md container prose prose-lg mx-auto mt-8 max-w-3xl px-6 sm:px-6 lg:prose-xl">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    </section>
  );
}
