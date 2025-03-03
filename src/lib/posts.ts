export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js framework...',
    date: 'April 1, 2024',
    slug: 'getting-started-with-nextjs'
  },
  {
    id: '2',
    title: 'Why TypeScript is Amazing',
    excerpt: 'Discover the benefits of using TypeScript in your projects...',
    date: 'April 2, 2024',
    slug: 'why-typescript-is-amazing'
  },
  {
    id: '3',
    title: 'Mastering Tailwind CSS',
    excerpt: 'A comprehensive guide to styling with Tailwind CSS...',
    date: 'April 3, 2024',
    slug: 'mastering-tailwind-css'
  }
];