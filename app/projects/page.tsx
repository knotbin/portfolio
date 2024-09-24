import { BlogPosts } from 'app/components/posts'
import { ProjectsPage } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'My recent work.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8">Projects</h1>
      <ProjectsPage />
    </section>
  )
}
