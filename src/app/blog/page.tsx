import Link from 'next/link'
import { blogPosts } from '@/lib/posts'

export default function BlogList() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <div className="text-sm text-gray-500">
                Published on {post.date}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}