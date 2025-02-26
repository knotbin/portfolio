import { BlogPosts } from 'app/components/posts'
import { BlogPreview } from './components/posts-preview'
import Link from 'next/link'
import { ProjectsPreview } from './components/projects-preview'

export default function Page() {
  return (
    <section>
      <h1 className="text-3xl font-bold">
        Roscoe Rubin-Rottenberg
      </h1>
      <h2 className='mb-8 text-xl font-medium text-gray-500 dark:text-gray-300'>knotbin</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        {`I'm a fifteen year old software developer. I know Swift, JS, and Python. I have the
        most experience in iOS development with SwiftUI and won the 2024 Apple Swift Student
        Challenge. I love learning how things work and overthinking everything I come across.`}
      </p>
      <div className="my-8">
        <h3 className='pb-8 font-medium'>Recent Blogs</h3>
        <BlogPreview />
        <Link key={'/blog'} href={'/blog'}>see more</Link>
        <h3 className='py-8 font-medium'>Recent Projects</h3>
        <ProjectsPreview/>
        <Link key={'/projects'} href={'/projects'}>see more</Link>
      </div>
    </section>
  )
}
