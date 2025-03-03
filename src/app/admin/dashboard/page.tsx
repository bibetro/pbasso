'use client'
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function AdminDashboard() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [isAuthenticated, router]);

  const handleDelete = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
  };

  const handleSave = (post: Post) => {
    setPosts(posts.map(p => p.id === post.id ? post : p));
    setEditingPost(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => logout()}
            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Blog Posts</h2>
          <button
            onClick={() => setEditingPost({ id: '', title: '', excerpt: '', date: '' })}
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
          >
            Add New Post
          </button>
        </div>

        <div className="grid gap-4">
          {posts.map(post => (
            <div key={post.id} className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">{post.date}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-yellow-600 px-3 py-1 rounded hover:bg-yellow-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {editingPost && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">
                {editingPost.id ? 'Edit Post' : 'Add New Post'}
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave(editingPost);
                }}
              >
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={editingPost.title}
                    onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                    className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 mb-2">Excerpt</label>
                  <textarea
                    value={editingPost.excerpt}
                    onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                    className="w-full p-2 rounded bg-gray-700 text-gray-100 border border-gray-600"
                    rows={3}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setEditingPost(null)}
                    className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}