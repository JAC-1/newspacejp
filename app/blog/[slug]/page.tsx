interface Post {
  title: string;
  slug: string;
  content: string;
}

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  // Return an array of objects that have one entry. The entry should have  'slug' for the key and post.slug
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
