interface Post {
  title: string;
  slug: string;
  content: string;
}

interface Params {
  params: { slug: string };
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
