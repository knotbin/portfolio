import Link from 'next/link'
import Image from 'next/image'
import { formatDate, getProjects } from 'app/projects/utils'

export function ProjectsPage() {
  let allBlogs = getProjects()

  return (
    <div className='grid grid-cols-2 gap-4'>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div>
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={post.metadata.link}
            >
              <Image src={post.metadata.image!} height={100} width={100} alt='Project' layout='responsive'></Image>
              <div className="w-full flex flex-col space-x-0">
                <p className="text-neutral-900 dark:text-neutral-100 font-bold text-xl">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {post.metadata.summary}
                </p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}
