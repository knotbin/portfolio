import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Blog Posts',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8">Blog</h1>
      <BlogPosts />
    </section>
  )
}
