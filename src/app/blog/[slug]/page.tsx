export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <article className="min-h-screen p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">My First Blog Post</h1>
        <div className="text-gray-500 mb-8">Published on April 1, 2024</div>
        <div className="prose lg:prose-xl">
          <p>
            This is the content of my first blog post. You can write your content here.
          </p>
        </div>
      </div>
    </article>
  )
}