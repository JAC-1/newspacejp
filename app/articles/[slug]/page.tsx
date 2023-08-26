export const revalidate = 420; // This will tell next to update.

interface Post {
  title: string;
  slug: string;
  content: string;
}

interface Params {
  params: { slug: string };
}

// A somewhat unecessary addition that helps Next find all your dynamic data so it can be rendered in advanced.
// "This approach is ideal for dynamic data that doesn't change verry often, like blog posts."
// Adding the revalidate option at the top is called "incremental static regeneration", it is server rendered, and continues to keep updated at set intervals
export async function generateStaticParams() {
  // Return an array of objects that have one entry. The entry should have  'slug' for the key and post.slug.
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json(),
  );

  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Params) {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json(),
  );

  const post: Post = posts.find((post) => params.slug === post.slug)!;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
