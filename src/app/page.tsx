'use client'
import Link from 'next/link'
import { blogPosts } from '@/lib/posts'
import { motion } from 'framer-motion'
import AnimatedElement from '@/components/AnimatedElement'
import ImageSlider from '@/components/ImageSlider'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative">
        <ImageSlider />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <AnimatedElement>
              <h1 className="text-5xl font-bold mb-6 text-gray-100">Welcome to My Blog</h1>
            </AnimatedElement>
            <AnimatedElement delay={0.2}>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
                Exploring ideas, sharing knowledge, and documenting my journey through technology and development.
              </p>
            </AnimatedElement>
            <AnimatedElement delay={0.4}>
              <Link 
                href="#latest-posts" 
                className="bg-blue-600 text-gray-100 px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 inline-block"
              >
                Read Latest Posts
              </Link>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4" id="latest-posts">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement>
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-100">Latest Posts</h2>
          </AnimatedElement>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedElement key={post.id} delay={0.2 * index}>
                <motion.article 
                  className="bg-gray-800 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700"
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      <Link href={`/blog/${post.slug}`} className="text-gray-100 hover:text-blue-400 transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">{post.date}</span>
                      <Link 
                        href={`/blog/${post.slug}`} 
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium group flex items-center"
                      >
                        Read More 
                        <motion.span
                          className="inline-block ml-1"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedElement>
            <h2 className="text-3xl font-bold mb-4 text-gray-100">Stay Updated</h2>
            <p className="text-gray-400 mb-8">Subscribe to get notified about new posts and updates.</p>
            <form className="flex gap-4 max-w-md mx-auto">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-gray-100 placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-600 text-gray-100 px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
