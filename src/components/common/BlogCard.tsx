import ArticleProps from '@/types/ArticleProps'
import clsx from 'clsx'
import { lazy } from 'react'

const Card = lazy(() => import('@/components/common/reusable/Card'))
const Heading3 = lazy(() => import('@/components/common/reusable/heading/Heading3'))

export default function BlogCard({ link, title, datePublished, minRead, preview }: ArticleProps) {
  return (
    <a
      href={link}
      className='group'
      target='_blank'
    >
      <Card className='p-4'>
        <Heading3
          className={clsx(
            'text-primary-dark dark:text-white',
            'group-hover:text-primary-lighter-dark group-hover:dark:text-primary-light',
            'group-hover:font',
            '!pb-2'
          )}
        >
          {title}
        </Heading3>
        <span className='text-sm text-muted-dark dark:text-muted'>
          {datePublished} • {`${minRead} min read`}
        </span>
        <p className='pb-0 pt-4 text-muted-dark dark:text-muted'>
          {preview}
          {'...'}
        </p>
      </Card>
    </a>
  )
}
